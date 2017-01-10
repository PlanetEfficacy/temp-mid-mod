var Link = React.createClass({
  getInitialState() {
    return { error: false }
  },

  readStatus() {
    let status = "This link has been marked "
    status += this.props.link.read ? "read." : "unread.";
    return status
  },

  update(event) {
    $.ajax({
      url: `/api/v1/links/${this.props.link.id}`,
      type: 'PATCH',
      data: { link: { title: this.refs.title.textContent,
                      url:   this.refs.url.textContent,
                      read:  this.props.link.read,
                      id:    this.props.link.id }
            },
      success: (link) => {
         this.setState( { error: false } )
         this.props.handleUpdate(link);
       }.bind(this),
       error: (err) => {
         this.setState( { error: JSON.parse(err.responseText).message } )
       }.bind(this)
     });
  },

  toggleRead(event) {
    let status = event.target.text === 'read';
    if(status !== this.props.link.read) {
      $.ajax({
        url: `/api/v1/links/${this.props.link.id}`,
        type: 'PATCH',
        data: { link: { title: this.refs.title.textContent,
          url:   this.refs.url.textContent,
          read:  status,
          id:    this.props.link.id }
        },
        success: (link) => {
          this.setState( { error: false } )
          this.props.handleUpdate(link);
        }.bind(this),
        error: (err) => {
          this.setState( { error: JSON.parse(err.responseText).message } )
        }.bind(this)
      });
    }
  },


  validation(){
    if(this.state.error){
      return (
        <p className="red-text flow text">
          {this.state.error}
        </p>
      )
    }
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
            <div className="white-text">Mark as: </div>
            <a href="#" onClick={ (event) => this.toggleRead(event) }>read</a>
            <a href="#" onClick={ (event) => this.toggleRead(event) }>unread</a>
          </div>
        </div>
      </div>
    )
  }
})
