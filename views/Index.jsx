const React = require('react');
const DefaultLayout = require('./layout/Default');


class Index extends React.Component {
  render(){
    const logs = this.props.logs;
    const timestamp = new Date(logs.createdAt).toLocaleString(); // Get the timestamp from the log's createdAt field
    return (
    <div style={{backgroundColor:'lightyellow', color:'blue' }}>
      <nav> <a href="/"><strong>Back to Main</strong></a></nav>
      <DefaultLayout title={"Logs Index Page"}>
      
        <nav>
          <a href="/logs/new"><strong>Create a New Log</strong></a>
        </nav>
        <ul>
          {
            logs.map((log, i)=>{
                const timestamp = log.createdAt ? new Date(log.createdAt).toLocaleString() : 'N/A';
                const editTimestamp = new Date(log.updatedAt).toLocaleString(); // Get the edit timestamp from the log's updatedAt field
                return (
                <li key={i}>
                  The <a href={`/logs/${log.id}`}>{log.title}</a> 
                  {' '} enter number {log.entry}. <br/><br/>
                  {
                    log.shipIsBroken?
                    <span style={{ color: 'red' }}>Ship is broken.</span> :
                    'Ship is ready to go!'
                    
                   
                  } {' '} <br/><br/>
                  Created time: {timestamp} <br/><br/> {/* Display the timestamp */}
                  Edited time: {editTimestamp} <br/><br/> {/* Display the edit timestamp */}
                  <a href={`/logs/${log._id}/edit`}>Edit</a> <br/><br/>
                    <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form> <br/><br/>
                </li>
              )
            })
          }
        </ul> 
       
      </DefaultLayout>
      </div>
    )
  }
}

module.exports = Index;