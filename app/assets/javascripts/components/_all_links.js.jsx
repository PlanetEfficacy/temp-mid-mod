var AllLinks = React.createClass({
  handleDeldete(id){
    console.log("deleting...")
  },

  onUpdate(link) {
    console.log("updating")
    // this.props.handleUpdate(link)
  },

  render() {
    var links = this.props.links.map((link) => {
      return (
        <Link link={link} />
      )
    });

    return(
      <div className="row">
        {links}
      </div>
    )
  }
})
