  // after mongo
  const React = require('react');

  class Show extends React.Component {
      render(){
          return (
              <div style={{backgroundColor:'lightyellow', color:'blue' }}>
                  <h1>Logs show page</h1>
                  The { this.props.log.title } enter number { this.props.log.entry }.<br></br><br></br>
          { this.props.log.shipIsBroken ? `The ship is broken` : `The ship is ready to go!`} <br></br><br></br>
          <nav> <a href="/logs"><strong>Back to Logs</strong></a></nav>
              </div>
          )
      }
  }
  module.exports = Show;