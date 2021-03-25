import React, {Component} from 'react';
import Cardlist from './Cardlist';
import SearchBox  from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component{
   constructor(){
   	super()
   	this.state={
   		robots: [],
   		searchfield: ''
   	}
   }
   componentDidMount(){
   	fetch('https://jsonplaceholder.typicode.com/users')
   	.then(response=>response.json())
   	.then(users=>this.setState({ robots: users}));
   }
   onSearchChange=(event)=>{
    this.setState({searchfield: event.target.value})
   }
    
    render(){
    	const filterRobots=this.state.robots.filter(robots=>{
          return(robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase()))	
    	})
    	if(this.state.robots.length===0){
    		return <h1>loading</h1>
    	}
    	else{
	return(
     <div className='tc '>
         <h1 className='sc ma1 pa3'>Robofriends</h1>
          <SearchBox searchchange={this.onSearchChange}/>
          <Scroll>
     <Cardlist robots={filterRobots} />  
     </Scroll>
   </div>

		);}
}}



export default App;
