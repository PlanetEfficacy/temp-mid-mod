var NewLink = React.createClass({
  handleClick(event) {
    event.preventDefault();
    let name = this.refs.title.value;
    let title = this.refs.url.value;
    $.ajax({
      url: '/api/v1/links',
      type: 'POST',
      data: { skill: { title: title, url: url } },
      success: (skill) => {
        this.props.handleSubmit(skill);
      }
    });
  },

  render() {
    return (
      <div>
        <div className="row">
          <h4 className="col l6 offset-l3">Submit a Link</h4>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="title-field">Title</label>
            <input type="text" id="title-field" ref="title"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="url-field">Url</label>
            <input type="text" id="url-field" ref="url"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <button
              onClick={ this.handleClick }
              className="waves-effect waves-light btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
})
