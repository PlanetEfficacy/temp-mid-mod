var NewLink = React.createClass({
  render() {
    return (
      <div>
        <div className="row">
          <h4 className="col l6 offset-l3">Submit a Link</h4>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="title-field">Title</label>
            <input type="text" id="title-field"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="url-field">Url</label>
            <input type="text" id="url-field"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <button className="waves-effect waves-light btn">Submit</button>
          </div>
        </div>
      </div>
    )
  }
})
