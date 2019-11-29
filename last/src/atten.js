import React,{Component} from 'react';
import hello from './hello.css';



class Atten extends Component{
  render(){
    return(
		<div className="container">
		<div class="grid-container">
  <header class="header">
  
  <div class="header__search"><h1>ATTENDANCE</h1></div>
  <div class="header__avatar">Logged in as</div>
</header>

  
  <aside class="sidenav">
  <ul class="sidenav__list">
    <li class="sidenav__list-item">Personal Information</li>
    <li class="sidenav__list-item">Qualification</li>
    <li class="sidenav__list-item">Attendance</li>
    
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
