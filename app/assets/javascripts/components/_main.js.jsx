var Main = React.createClass({

  componentDidMount() {
    $.getJSON('/api/v1/links.json', (response) => {
      this.setState({ links: response, allLinks: response })
    });
  },

  handleSubmit(link) {
    var newLinks = this.state.links.concat(link);
    this.setState({ links: newLinks })
  },

  render () {
    return (
      <div className="container">
        <NewLink handleSubmit={ this.handleSubmit }/>
        <AllLinks links={ this.state.links } />
      </div>
    )
  }
});
