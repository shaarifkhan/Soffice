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
      <div className="container-right">
      <Link to ='/Signup' className="navbar-brand" > Sign up </Link>
      </div>
      <div className="container-right">
      <Link to ='/Signin' className="navbar-brand" > Sign in </Link>
      </div>
	    <div className="container"></div>
	    <div className="collapse navbar-collapse" id="ftco-nav"></div>
      <Link to ='/Empdash' className="navbar-brand" > </Link>
      <Link to ='/Hrdash' className="navbar-brand" > </Link>  
      <Link to ='/Post' className="navbar-brand" > </Link>
      <Link to ='/Quali' className="navbar-brand" > </Link>
      </nav>	
    )
}
export default Navbar