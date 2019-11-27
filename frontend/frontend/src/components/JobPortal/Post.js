import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import './Contact.css';
class Post extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      message:''
    }
  }
  handleClick(){
    console.log(this.state)
  }
  render() {
    return (
    <div className="container-b">
    
      <div className="overlay"></div>
      <div className="container" >
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start" data-scrollax-parent="true">
          <div className="col-md-8 ftco-animate text-center text-md-left mb-5" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Post a Job</h1>
            <p class="mb-4 mt-5 pt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Hire the most capable individuals with Soffice!</p>
            <h1 class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your Needs <br></br><span>Fulfills Here</span></h1>
          </div>
        </div>
      </div>
    <div className="container">
          <div>
          
           <MuiThemeProvider>
          <div>
      <AppBar
             title="Job Details"
           />
           </div>
           </MuiThemeProvider>
           <div className="ftco-section bg-light">
        <div className="container-center">
       
          <div className="container-center">
          
			     <form action="#" className="p-5 bg-white">

           <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname">Job Title</label>
                  <input type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer"/>
                </div>
              </div>

              <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname">Company</label>
                  <input type="text" id="fullname" className="form-control" placeholder="eg. Facebook, Inc."/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12"><h3>Job Type</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-1">
                    <input type="radio" id="option-job-type-1" name="job-type"/> Full Time</label>
                </div>
              

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-2">
                    <input type="radio" id="option-job-type-2" name="job-type"/> Part Time
                  </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-3">
                    <input type="radio" id="option-job-type-3" name="job-type"/> Freelance
                </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input type="radio" id="option-job-type-4" name="job-type"/> Internship
                  </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input type="radio" id="option-job-type-4" name="job-type"/> Termporary
                  </label>
                </div>
                </div>

                <div className="row form-group mb-4">
                <div className="col-md-12"><h3>Location</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Western City, UK"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12"><h3>Job Description</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <textarea name="" className="form-control" id="" cols="30" rows="5"></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input type="submit" value="Post" className="btn btn-primary  py-2 px-5"/>
                </div>
              </div>

              </form>
              </div>
              </div>
               <br/>
          </div>
          </div>
          </div>
          </div>         
)}
};
const style = {
    margin: 15,
    'input-label': {
     textOverflow: 'ellipsis',
     whiteSpace: 'nowrap',
     overflow: 'hidden',
     width: '100%',
     color: 'red'
   },
   
   'input': {
     '&::placeholder': {
       textOverflow: 'ellipsis !important',
       color: 'blue'
     }
   }
   };
export default Post;