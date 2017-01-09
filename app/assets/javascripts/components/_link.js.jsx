var Link = React.createClass({
  readStatus() {
    let status = "This link has been marked "
    status += this.props.link.read ? "read." : "unread.";
    return status
  },

  render() {
    return (
      <div className="col l3">
        <div className="card small blue-grey darken-1">
          <div className="card-content white-text">
            <a href="{this.props.link.url}" className="white-text">
              <span className="card-title">{ this.props.link.title }</span>
            </a>
            <p className="flow text">{ this.readStatus() }</p>
          </div>
          <div className="card-action">
            <a href="#">read</a>
            <a href="#">unread</a>
          </div>
        </div>
      </div>
    )
  }
})
