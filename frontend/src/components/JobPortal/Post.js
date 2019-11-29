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
      jobTitle:'',
      jobType:'',
      jobCategory:'',
      experience:'',
      qualification:'',
      lastDate:'',
      location:'',
      salary:'',
      jobDescription:''
    }
  }
  handleSubmit(event){
    console.log(this.state)
  }
  // handleChange(event){
  //   value = event.target.value
  //   this.setState = () => {
  //     return{
  //       ...this.state,
  //       [event.target.name]:event.target.value
  //     }
  //   }
  // }
  render() {
    return (
    <div className="container">
    
      <div className="overlay"></div>
      <div className="container-t" >
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
          
			     <form onSubmit={this.handleSubmit.bind(this)} className="p-5 bg-white">

           <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Job Title</h3></label>
                  <input onChange={(event,value) => this.setState({jobTitle:value})}  type="text" id="fullname" className="form-control" placeholder="eg. Professional UI/UX Designer"/>
                </div>
              </div>

              

              <div className="row form-group">
                <div className="col-md-12"><h3>Job Type</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-1">
                    <input onChange={(event,value) => this.setState({jobType:value})} type="radio" id="option-job-type-1" name="jobType"/> Full Time</label>
                </div>

                

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-2">
                    <input onChange={(event,value) => this.setState({jobType:value})} type="radio" id="option-job-type-2" name="jobType"/> Part Time
                  </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-3">
                    <input onChange={(event,value) => this.setState({jobType:value})} type="radio" id="option-job-type-3" name="jobType"/> Freelance
                </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input onChange={(event,value) => this.setState({jobType:value})} type="radio" id="option-job-type-4" name="jobType"/> Internship
                  </label>
                </div>

                <div className="col-md-12 mb-3 mb-md-0">
                  <label for="option-job-type-4">
                    <input onChange={(event,value) => this.setState({jobType:value})} type="radio" id="option-job-type-4" name="jobType"/> Termporary
                  </label>
                </div>
                </div>
                <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Job Category</h3></label>
                  <input onChange={(event,value) => this.setState({jobCategory:value})} name="jobCategory" type="text" id="fullname" className="form-control" placeholder="eg. Computer Science"/>
                </div>
              </div>
              <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Experience</h3></label>
                  <input onChange={(event,value) => this.setState({experience:value})} name="experience" type="text" id="fullname" className="form-control" placeholder="eg. 2 years"/>
                </div>
              </div>

              <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Qualification</h3></label>
                  <input onChange={(event,value) => this.setState({qualification:value})} name="qualification" type="text" id="fullname" className="form-control" placeholder="eg. Graduation"/>
                </div>
              </div>
              <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Last date to apply</h3></label>
                  <input onChange={(event,value) => this.setState({lastDate:value})} name="lastDate" type="text" id="fullname" className="form-control" placeholder="eg. 10-Dec-2019"/>
                </div>
              </div>

                <div className="row form-group mb-4">
                <div className="col-md-12"><h3>Location</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <input onChange={(event,value) => this.setState({location:value})} name="location" type="text" className="form-control" placeholder="Karachi"/>
                </div>
              </div>

              <div className="row form-group mb-5">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" for="fullname"><h3>Salary</h3></label>
                  <input onChange={(event,value) => this.setState({salary:value})} name="salary" type="text" id="fullname" className="form-control" placeholder="eg. Computer Science"/>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12"><h3>Job Description</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <textarea onChange={(event,value) => this.setState({jobDescription:value})} name="jobDescription" className="form-control" id="" cols="30" rows="5"></textarea>
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