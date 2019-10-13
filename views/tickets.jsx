var React = require('react');
var Layout = require('./layout');

class Tickets extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>Tickets</h1>
        <p>Showing tickets {this.props.type}</p>
      </Layout>
    );
  }
}

module.exports = Tickets;
