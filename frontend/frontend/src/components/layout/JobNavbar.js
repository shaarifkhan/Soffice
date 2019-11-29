import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return(
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light" >
	    <div className="container-center"></div>
	      <div className="collapse navbar-collapse" id="ftco-nav"></div>
		  <Link to ='/JobPortal' className="navbar-brand" > Home </Link>
			<Link to ='/Post' className="navbar-brand" > Post Job </Link>
			<Link to ='/Want' className="navbar-brand" > Want Job </Link>
			<Link to ='/Contact' className="navbar-brand" > Contact </Link>
			<Link to ='/Signin' className="navbar-brand" > </Link>
			

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
    </ul>

  </div>
</nav>	

    )}
	export default Navbar;
	
	