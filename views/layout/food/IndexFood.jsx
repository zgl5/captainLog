const React = require('react');
const DefaultLayout = require('../Default');


class IndexFood extends React.Component {
  render(){
    const foods = this.props.foods;
    const timestamp = new Date(foods.createdAt).toLocaleString(); // Get the timestamp from the log's createdAt field
    return (
    <div style={{backgroundColor:'lightyellow', color:'blue' }}>
      <DefaultLayout title={"Foods Index Page"}>
      
        <nav>
          <a href="/foodlogs/new"><strong>Create a New Food</strong></a>
        </nav>
        <ul>
          {
            foods.map((food, i)=>{
                const timestamp = food.createdAt ? new Date(food.createdAt).toLocaleString() : 'N/A';
                const editTimestamp = new Date(food.updatedAt).toLocaleString(); // Get the edit timestamp from the food's updatedAt field
                return (
                <li key={i}>
                  The <a href={`/foodlogs/${food.id}`}>{food.name}</a> is
                  {' '} {food.type}. <br/><br/>
                  {
                    food.haveFood?
                    <span style={{ color: 'red' }}> You can eat! </span> :
                    'There is no more ' + food.name + '.'
                               
                  } {' '} <br/><br/>
                  Created time: {timestamp} <br/><br/> {/* Display the timestamp */}
                  Edited time: {editTimestamp} <br/><br/> {/* Display the edit timestamp */}
                  <a href={`/foodlogs/${food.id}/edit`}><strong style={{color:'red'}}> Edit</strong></a> <br/><br/>
                    <form action={`/foodlogs/${food.id}?_method=DELETE`} method="POST">
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

module.exports = IndexFood;