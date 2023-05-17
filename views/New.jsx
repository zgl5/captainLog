const React = require('react');

class New extends React.Component {
  render() {
    const timestamp = new Date().toLocaleString(); // Get the current timestamp

    return (
        <div style={{backgroundColor:'lightyellow', color:'blue' }}>
            <h1>Logs</h1>
           
            <form action="/logs" method="POST">
             Title: <input type="text" name="title" /><br/><br/>
              Entry: <input type="textarea" name="entry" /><br/><br/>
              Is Ship Broken: <input type="checkbox" name="shipIsBroken" /><br/><br/>
              Timestamp: {timestamp}<br /><br /> {/* Display the timestamp */}
              <input type="submit" name="" value="Create Log"/>
            </form><br/><br/>
            <nav> <a href="/logs"><strong>Back to Logs</strong></a></nav>
        </div>);
    }
  }

module.exports = New;