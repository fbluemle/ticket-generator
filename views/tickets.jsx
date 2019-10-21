var React = require('react');
var Layout = require('./layout');

class Tickets extends React.Component {
  render() {
    return (
      <Layout title={this.props.title}>
        <h1>Tickets</h1>
        <form action="tickets/generate" method="POST">
          <div>
            <label>Template</label>
            <select name="template">
              <option value="sbp">Sunnyvale Business Park</option>
            </select>
          </div>
          <div>
            <label htmlFor="start">Start date:</label>
            <input type="date" id="start" name="ticket-start"
                   value="2019-10-14"
                   min="2019-10-14" max="2019-12-14"/>
          </div>
          <div>
            <label>Number of days</label>
            <select name="days">
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <label>File Type</label>
            <select name="fileType">
              <option value="pdf">pdf</option>
              <option value="png">png</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Generate"/>
          </div>
        </form>
      </Layout>
    );
  }
}

module.exports = Tickets;
