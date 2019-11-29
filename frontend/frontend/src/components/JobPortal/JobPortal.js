import React,{Component} from 'react';

import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from '../layout/JobNavbar'
import JobHome from './JobHome';
import Contact from './Contact';
import Post from './Post';
import Want from './Want';
import './Contact.css';
import Signin from './../Auth/Signin'
class JobPortal extends Component{
  render(){
    return(
        <BrowserRouter>
         <Navbar/>
         <Switch> 
           <Route exact path= '/JobPortal' component={JobHome}/> 
          <Route exact path= '/Contact' component={Contact}/>
          <Route exact path= '/Post' component={Post}/>
          <Route exact path= '/Want' component={Want}/>
          <Route exact path= '/Signin' component={Signin}/>
        </Switch>
      </BrowserRouter>
    )
        }
    };
export default JobPortal;