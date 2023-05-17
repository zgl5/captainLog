const React = require('react');

class NewFood extends React.Component {
  render() {
    const timestamp = new Date().toLocaleString(); // Get the current timestamp

    return (
        <div style={{backgroundColor:'lightyellow', color:'blue' }}>
            <h1>Foods</h1>
           
            <form action="/foodlogs" method="POST">
             Name: <input type="text" name="name" /><br/><br/>
              Type: <input type="textarea" name="type" /><br/><br/>
              Have the food: <input type="checkbox" name="haveFood" /><br/><br/>
              Timestamp: {timestamp}<br /><br /> {/* Display the timestamp */}
              <input type="submit" name="" value="Create Food"/>
            </form><br/><br/>
            <nav> <a href="/foodlogs"><strong>Back to Foods</strong></a></nav>
        </div>);
    }
  }

module.exports = NewFood;