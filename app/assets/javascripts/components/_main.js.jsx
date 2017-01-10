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

  render () {
    return (
      <div className="container">
        <NewLink handleSubmit={ this.handleSubmit }/>
        <AllLinks links={ this.state.links }
                  handleUpdate={ this.handleUpdate }/>
      </div>
    )
  }
});
