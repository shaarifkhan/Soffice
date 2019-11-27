import React from 'react';
import { Link } from 'react-router-dom';


const Navbar =(props)=>{
        return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
      <div className="container-left">
			<Link to ='/' className="navbar-brand" > Soffice </Link>
      </div>
       <div className="container-left">
       <Link to ='/JobPortal' className="navbar-brand" > Job Portal </Link>
      </div>
	    <div className="container"></div>
	      <div className="collapse navbar-collapse" id="ftco-nav"></div>
                    <Link to ='/Signup' className="navbar-brand" > Sign up </Link>
                    <Link to ='/Signin' className="navbar-brand" > Sign in </Link>
      
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      
    </ul>

  </div>
</nav>	
       
		)

}
export default Navbar