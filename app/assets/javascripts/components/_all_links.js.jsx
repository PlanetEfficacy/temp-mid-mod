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
