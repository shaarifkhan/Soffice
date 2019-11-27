import React from 'react';
import Navbar from '../layout/Navbar';
import { BrowserRouter,Route} from 'react-router-dom';
import Jobportal from '../JobPortal/JobPortal';
import Signup from '../Auth/Signup';
import Signin from '../Auth/Signin';
import '../../index.css';
import App from '../../App';
import Shome from '../Soffice/Shome'
const Home =()=>{
    return(
      <div>
      <BrowserRouter>
      <div className="Home">
         <Navbar/>
         <switch>
         <Route exact path= '/' component={Shome}/>
          <Route exact path= '/JobPortal' component={Jobportal}/>
          <Route exact path= '/Signup' component={Signup}/>
          <Route exact path= '/Signin' component={Signin}/>
          </switch>
        </div>
      </BrowserRouter>
      
        </div>
    )
}
export default Home;