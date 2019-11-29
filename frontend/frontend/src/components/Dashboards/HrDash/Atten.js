import React,{Component} from 'react';
import hello from './hello.css';
import {Redirect} from 'react-router-dom'



class Atten extends Component{
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
  
  <div class="header__search"><h1>ATTENDANCE</h1></div>
  <div class="header__avatar">Logged in as</div>
</header>

  
  <aside class="sidenav">
  <ul class="sidenav__list">
  <a onClick={this.handleinfo}> <li class="sidenav__list-item">Personal Information</li></a>
    <a onClick={this.handlequali}><li class="sidenav__list-item">Qualification</li></a>
    <a onClick={this.handleatten}><li class="sidenav__list-item">Attendance</li></a>
    
    
  </ul>
  </aside>
  <main class="main">
  <div class="w3-container">
  <div class="w3-border">
      CURRENT ATTENDANCE PERCETAGE
  <div class="w3-green" >
      70%
  </div>
</div>
      <br/>
      <h3>SUMMARY</h3>

      </div>
      <table id="customers">
  <tr>
    <th>Type</th>
    <th>from</th>
    <th>Till</th>
    <th>Status</th>
    
  </tr>
  <tr>
    <td>Sick Leave</td>
    <td>10-06-19</td>
    <td>15-06-19</td>
    <td>Approved</td>
  </tr>
  <tr>
    <td>Casual</td>
    <td>15-05-19</td>
    <td>15-05-19</td>
    <td>approved</td>
  </tr>
  <tr>
    <td>Privellage</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>sick</td>
    <td>10-3-18</td>
    <td>12-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>casual</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>casual</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>Privellage</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>not informed</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>not-approved</td>
  </tr>
  <tr>
  <td>sick</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
  <tr>
  <td>causal</td>
    <td>10-3-18</td>
    <td>20-3-18</td>
    <td>approved</td>
  </tr>
</table>

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
export default Atten;
