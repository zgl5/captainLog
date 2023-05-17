const React = require('react');
const DefaultLayout = require('./layout/Default.jsx');

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout title="Edit Page">      
        <form style={{backgroundColor:'lightyellow', color:'blue' }} action={`/logs/${log._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={log.title} /><br/><br/>
          Entry: <input type="text" name="entry" defaultValue={log.entry} /><br/><br/>
          Is Ship Broken:
          <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} /><br/><br/>
          <input type="submit" value="Submit Changes" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = Edit;
