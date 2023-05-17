  const React = require('react');

  class ShowFood extends React.Component {
      render(){
          return (
              <div style={{backgroundColor:'lightyellow', color:'blue' }}>
                  <h1>Foods show page</h1>
                  The { this.props.food.name } is { this.props.food.type }.<br></br><br></br>
          { this.props.food.haveFood ? `You can eat!` : `There is no more ${this.props.food.name}.`} <br></br><br></br>
          <nav> <a href="/foodlogs"><strong>Back to Foodlogs</strong></a></nav>
              </div>
          )
      }
  }
  module.exports = ShowFood;