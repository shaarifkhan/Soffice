import React,{Component} from 'react';
import hello from './hello.css';
import {Redirect} from 'react-router-dom'


class Info extends Component{
  state={
		info:false,
		atten:false,
		quali:false
	}
	handleinfo=()=>{
		this.setState(()=>({
			info:true
		}))
	}

	handleatten=()=>{
		this.setState(()=>({
			atten:true
		}))
	}

	handlequali=()=>{
		this.setState(()=>({
			quali:true
		}))
	}
  render(){
    if(this.state.info===true)
		{
			return(
			<Redirect to='/Info'/>
			)
		}
		if(this.state.quali===true)
		{
			return(
			<Redirect to='/Quali'/>
			)
		}
		if(this.state.atten===true)
		{
			return(
			<Redirect to='/Atten'/>
			)
		}
    return(
		<div className="container">
		<div class="grid-container">
  <header class="header">
  
  <div class="header__search">PERSONAL INFORMATION</div>
  <div class="header__avatar">ADMIN</div>
</header>

  
  <aside class="sidenav">
  <ul class="sidenav__list">
  <a onClick={this.handleinfo}> <li class="sidenav__list-item">Personal Information</li></a>
    <a onClick={this.handlequali}><li class="sidenav__list-item">Qualification</li></a>
    <a onClick={this.handleatten}><li class="sidenav__list-item">Attendance</li></a>
    
    
  </ul>
  </aside>
  <main class="main">
 <h3>Name: </h3>
 <h3>Age: </h3>
 <h3>Designation: </h3>
 <h3>Date of Joining:</h3>
        
  </main>
  
</div>


<footer class="footer">
  <div class="footer__copyright">&copy; 2018 MTH</div>
  <div class="footer__signature">Made with love by pure genius</div>
</footer>


		</div>
     )
}
}
export default Info;
