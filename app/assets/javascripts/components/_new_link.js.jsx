var NewLink = React.createClass({
  getInitialState() {
    return { error: false }
  },

  handleClick(event) {
    event.preventDefault();
    let title = this.refs.title.value;
    let url = this.refs.url.value;
    $.ajax({
      url: '/api/v1/links',
      type: 'POST',
      data: { link: { title: title, url: url } },
      success: (link) => {
        this.setState( { error: false } )
        this.props.handleSubmit(link);
      }.bind(this),
      error: (err) => {
        this.setState( { error: JSON.parse(err.responseText)[0] } )
      }.bind(this)
    });
  },

  validation(){
    if(this.state.error){
      return (
        <div className="row">
          <p className="red-text text-darken-4 flow text col l6 offset-l3">
            {this.state.error}
          </p>
        </div>
      )
    }
  },

  render() {
    return (
      <div>
        <div className="row">
          <h4 className="col l6 offset-l3">Submit a Link</h4>
        </div>
        { this.validation() }
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="title-field">Title</label>
            <input type="text" id="title-field" ref="title"/>
          </div>
        </div>
        <div className="row">
          <div className="input-field col l6 offset-l3">
            <label for="url-field">Url</label>
            <input type="url" id="url-field" ref="url"/>
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
