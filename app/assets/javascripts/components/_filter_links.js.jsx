var FilterLinks = React.createClass({
  updateFilter(event) {
    this.props.filter(event.target.textContent)
  },

  searchLinks(event) {
    this.props.searchLinks(event.target.value)
  },

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <label>Search</label>
          <input type="text" onKeyUp={(event) => this.searchLinks(event)}/>
        </div>
        <div className="col l8">
          <div className="row">
            <div className="col l2">
              <span className="flow text">Filter: </span>
            </div>
            <div className="col l2">
              <a href="#" onClick={(event) => this.updateFilter(event)}>All</a>
            </div>
            <div className="col l2">
              <a href="#" onClick={(event) => this.updateFilter(event)}>Read</a>
            </div>
            <div className="col l2">
              <a href="#" onClick={(event) => this.updateFilter(event)}>Unread</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
