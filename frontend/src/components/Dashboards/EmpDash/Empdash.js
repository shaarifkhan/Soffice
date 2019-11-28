import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';

class Empdash extends Component{
	state={
		quali:false}
	onclick=()=>{
		this.setState(()=>({
			quali:true
		}))

	}
  render(){
	if(this.state.quali==true)
	{
		return(
			<Redirect to='./Quali'/>
		)
	}
    return(
		<div className="container">
		<br></br>
		<br></br>
		<br></br>
		<h1>Welcome To Employee Dashboard</h1>
		<button onClick={this.onclick}>Quali</button>
		</div>
     )
}
}
export default Empdash;