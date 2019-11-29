import React,{Component} from 'react';
import hello from './hello.css';



class Quali extends Component{
  render(){
    return(
		<div className="container">
		<div class="grid-container">
  <header class="header">
  
  <div class="header__search">Qualification</div>
  <div class="header__avatar">Admin</div>
</header>

  
  <aside class="sidenav">
  <ul class="sidenav__list">
    <li class="sidenav__list-item">Personal Information</li>
    <li class="sidenav__list-item">Qualification</li>
    <li class="sidenav__list-item">Attendance</li>
    
  </ul>
  </aside>
  <main class="main">
    <h1 id="qul"> Your Personal Qualifications</h1>
    <table id="customers">
  <tr>
    <th>Education</th>
    <th>Institute</th>
    <th>Status</th>
    
    
  </tr>
  <tr>
    <td>Matriculation</td>
    <td>XYZ School</td>
    <td>Verifeid</td>
    
  </tr>
  <tr>
    <td>Intermediate</td>
    <td>Dehli GOVT College</td>
    <td>Verfied</td>
    
  </tr>
  <tr>
    <td>BS(CS)</td>
    <td>FAST NUCES</td>
    <td>Verifed</td>
    
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
export default Quali;
