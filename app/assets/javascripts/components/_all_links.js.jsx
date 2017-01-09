var AllSkills = React.createClass({
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
        <div className="row">
          <div className="card small">
            { link.id }
            { link.title }
            { link.url }
            { link.read }
          </div>
        </div>
      )
    });

    return(
      <div>
        {links}
      </div>
    )
  }
})
