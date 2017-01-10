var AllLinks = React.createClass({
  handleDeldete(id){
    console.log("deleting...")
  },

  onUpdate(link) {
    console.log("updating")
    // this.props.handleUpdate(link)
  },

  handleUpdate(link) {
    this.props.handleUpdate(link)
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
    var links = this.props.links.map((link) => {
      return (
        <Link link={link} handleUpdate={this.handleUpdate}/>
      )
    });

    return(
      <div className="row">
        {links}
      </div>
    )
  }
})
