const React = require('react');
const DefaultLayout = require('../Default.jsx');

class EditFood extends React.Component {
  render() {
    const { food } = this.props;
    return (
      <DefaultLayout title="Edit Page">      
        <form style={{backgroundColor:'lightyellow', color:'blue' }} action={`/foodlogs/${food._id}?_method=PUT`} method="POST">
          Name: <input type="text" name="name" defaultValue={food.name} /><br/><br/>
          Type: <input type="text" name="type" defaultValue={food.type} /><br/><br/>
          have the food:
          <input type="checkbox" name="haveFood" defaultChecked={food.haveFood} /><br/><br/>
          <input type="submit" value="Submit Changes" />
        </form><br/><br/>
        <nav> <a href="/foodlogs"><strong>Back to Foods</strong></a></nav>
      </DefaultLayout>
    );
  }
}

module.exports = EditFood;