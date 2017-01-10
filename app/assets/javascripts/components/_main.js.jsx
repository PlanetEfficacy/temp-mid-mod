var Main = React.createClass({
  getInitialState() {
    return { links: [] }
  },

  componentDidMount() {
    this.queryLinks();
    // this.queryHotReads();
  },

  queryLinks() {
    $.getJSON('/api/v1/links.json', (response) => {
      this.setState({ links: response, allLinks: response })
    }).then(this.queryHotReads());
  },

  queryHotReads() {
    $.getJSON('https://final-hot-reads.herokuapp.com/api/v1/reads.json', (response) => {
      this.setState({ hotReads: response, topRead: response[0] })
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
    this.queryHotReads()
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
    console.log(this.state.hotReads)
    console.log(this.state.topRead)
    return (
      <div className="container">
        <NewLink handleSubmit={ this.handleSubmit }/>
        <FilterLinks filter={this.filterLinks}
                     searchLinks={this.searchLinks}/>
        <AllLinks links={ this.state.links }
                  handleUpdate={ this.handleUpdate }
                  hotReads={ this.state.hotReads }
                  topRead={ this.state.topRead }/>
      </div>
    )
  }
});
