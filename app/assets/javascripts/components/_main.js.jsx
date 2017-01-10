var Main = React.createClass({
  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/links.json', (response) => {
      this.setState({ links: response, allLinks: response })
    });
  },

  handleSubmit(link) {
    var newLinks = this.state.links.concat(link);
    this.setState({ links: newLinks })
  },

  handleUpdate(link) {
    var newLinks = this.state.links.map((clientLink) => {
      if(clientLink.id === link.id) {
        clientLink.read = link.read;
      }
      return clientLink;
    })
    this.setState({ links: newLinks })
  },

  filterLinks(value) {
    let links = this.state.allLinks;
    if (value === "Read") {
      links = links.filter((link) => { return link.read })
    } else if (value === "Unread") {
      links = links.filter((link) => { return !link.read })
    }
    this.setState({links: links})
  },

  searchLinks(value) {
    let links = this.state.allLinks.filter((link) => {
      return link.title.includes(value) || link.url.includes(value);
    })
    this.setState({ links: links })
  },

  render () {
    return (
      <div className="container">
        <NewLink handleSubmit={ this.handleSubmit }/>
        <FilterLinks filter={this.filterLinks}
                     searchLinks={this.searchLinks}/>
        <AllLinks links={ this.state.links }
                  handleUpdate={ this.handleUpdate }/>
      </div>
    )
  }
});
