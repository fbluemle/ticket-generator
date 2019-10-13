var React = require('react');

class Layout extends React.Component {
  render() {
    return (
      <html>
      <head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/stylesheets/style.css"/>
      </head>
      <body>{this.props.children}</body>
      </html>
    );
  }
}

module.exports = Layout;
