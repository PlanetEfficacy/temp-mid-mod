var Link = React.createClass({

  readStatus() {
    let status = "This link has been marked "
    status += this.props.link.read ? "read." : "unread.";
    return status
  },

  update(event) {
    let link = { title: this.refs.title.textContent,
                 url:   this.refs.url.textContent,
                 read:  this.props.link.read,
                 id:    this.props.link.id }
    $.ajax({
      url: `/api/v1/links/${this.props.link.id}`,
      type: 'PATCH',
      data: { link: link },
      success: (link) => {
         this.setState( { error: "" } )
         this.props.handleSubmit(link);
       }.bind(this),
       error: (err) => {
         this.setState( { error: JSON.parse(err.responseText)[0] } )
       }.bind(this)
     });
    this.props.handleUpdate(link);
  },

  render() {
    return (
      <div className="col l4">
        <div className="card small blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title"
                  contentEditable
                  ref="title"
                  onBlur={ (event) => this.update(event) }>
                    { this.props.link.title }
            </span>
            <p className="flow text"
               contentEditable
               ref="url"
               onBlur={ (event) => this.update(event) }>{ this.props.link.url }</p>
            { this.validation() }
            <p className="flow text">{ this.readStatus() }</p>
            <a href="{this.props.link.url}" className="orange-text text-lighten-1">
              visit link
            </a>
          </div>
          <div className="card-action">
            <a href="#">delete</a>
            <a href="#">read</a>
            <a href="#">unread</a>
          </div>
        </div>
      </div>
    )
  }
})
