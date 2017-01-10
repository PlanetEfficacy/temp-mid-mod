var AllLinks = React.createClass({
  handleUpdate(link) {
    this.props.handleUpdate(link)
  },

  render() {
    let links = this.props.links.map((link) => {
      return (
        <Link link={link}
        key={link.id}
        handleUpdate={this.handleUpdate}
        hotRead={this.props.hotReads && this.props.hotReads.includes(link.url)}
        topRead={this.props.topRead === link.url}/>
      )
    });
    return(
      <div className="row">
        {links}
      </div>
    )
  }
})
