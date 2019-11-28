import React from 'react';
import Navbar from '../layout/Navbar';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import Jobportal from '../JobPortal/JobPortal';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import '../../index.css';
import Shome from '../Soffice/Shome'
import Empdash from '../Dashboards/EmpDash/Empdash';
import Hrdash from './../Dashboards/Hrdash';
import Post from './../JobPortal/Post';
import Quali from './../Dashboards/EmpDash/Quali'
const Home =()=>{
    return(
      <div>
      <BrowserRouter>
      <div className="Home">
         <Navbar/>
         <Switch>
         <Route exact path= '/' component={Shome}/>
          <Route exact path= '/JobPortal' component={Jobportal}/>
          <Route exact path= '/Signup' component={Signup}/>
          <Route exact path= '/Signin' component={Signin}/>
          <Route exact path= '/Empdash' component={Empdash}/>
          <Route exact path= '/Hrdash' component={Hrdash}/>
          <Route exact path= '/Post' component={Post}/>
          <Route exact path= '/Quali' component={Quali}/>
          </Switch>
        </div>
      </BrowserRouter>
      
        </div>
    )
}
export default Home;