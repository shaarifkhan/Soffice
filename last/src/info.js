import React,{Component} from 'react';
import hello from './hello.css';



class Info extends Component{
  render(){
    return(
		<div className="container">
		<div class="grid-container">
  <header class="header">
  
  <div class="header__search">PERSONAL INFORMATION</div>
  <div class="header__avatar">ADMIN</div>
</header>

  
  <aside class="sidenav">
  <ul class="sidenav__list">
    <li class="sidenav__list-item">Personal Information</li>
    <li class="sidenav__list-item">Qualification</li>
    <li class="sidenav__list-item">Attendance</li>
    
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
