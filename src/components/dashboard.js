import React, {Component} from 'react';
import PostTable from './PostTable.component.js'

class Dashboard extends Component{
    
render(){
    return(
        <div>
            <h1>Dashboard</h1>

            <PostTable/>
        </div>
    )
}
    
}
export default Dashboard
