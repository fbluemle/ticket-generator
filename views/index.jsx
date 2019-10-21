var React = require('react');
var Layout = require('./layout');

class Index extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>{this.props.title}</h1>
        <p>Welcome to {this.props.title}</p>
        <p><a href="tickets">Generate tickets</a></p>
      </Layout>
    );
  }
}

module.exports = Index;
