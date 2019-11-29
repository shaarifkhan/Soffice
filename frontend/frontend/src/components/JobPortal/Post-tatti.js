import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Contact.css';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class Post extends Component {
    state={
      job:{
      jobTitle:'',
      jobType:'',
      jobCategory:'',
      experience:'',
      qualification:'',
      postedOn:'',
      lastDate:'',
      location:'',
      salary :'',
      jobDescription:'',
      // postj:true
      }
    }
  
  post=()=>{
    console.log(this.state)
    this.setState(()=>({
    // postj:true
  }))
  }
  render() {
    const { job } = this.state
    if(this.state.postj===true)
    {
    return(
      <Redirect to={{pathname:'/Signin',state:{job:this.state.job}}}/>
      )
    }
    return (
    <div className="container-b">
    
      <div className="overlay"></div>
      <div className="container" >
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start" data-scrollax-parent="true">
          <div className="col-md-8 ftco-animate text-center text-md-left mb-5" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Post a Job</h1>
            <p className="mb-4 mt-5 pt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Hire the most capable individuals with Soffice!</p>
            <h1 className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your Needs <br></br><span>Fulfills Here</span></h1>
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
          
			     <form  className="p-5 bg-white">

           <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Job Title</label>
                  <input  type="text" id="fullname" className="form-control" placeholder="eg. Engineer, Doctor etc"
            value={job.jobTitle}
            onChange={e => this.setState({ job: {...job, jobTitle:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Job Type</label>
                  <input  type="text" id="fullname" className="form-control" placeholder="eg. Part time, Full Time etc"
            value={job.jobType}
            onChange={e => this.setState({ job: {...job, jobType:e.target.value}})} />
                </div>
              </div>
              

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Job Category</label>
                  <input type="text" id="fullname" className="form-control" placeholder="eg. Management,Technical etc"
            value={job.jobCategory}
            onChange={e => this.setState({ job: {...job, jobCategory:e.target.value}})} />
                </div>
              </div>

              
              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Experience</label>
                  <input type="text" id="fullname" className="form-control" placeholder="eg. 5 years,2 years etc"
            value={job.experience}
            onChange={e => this.setState({ job: {...job, experience:e.target.value}})} />
                </div>
              </div>
              
              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Posted On</label>
                  <input type="date" id="fullname" className="form-control" placeholder="eg. 12/02/2019"
            value={job.postedOn}
            onChange={e => this.setState({ job: {...job,postedOn:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Last Date</label>
                  <input type="date" id="fullname" className="form-control" placeholder="eg. 12/02/2019"
            value={job.lastDate}
            onChange={e => this.setState({ job: {...job,lastDate:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Qualification</label>
                  <input type="text" id="fullname" className="form-control" placeholder="eg. Bachelors,Masters etc"
            value={job.qualification}
            onChange={e => this.setState({ job: {...job, qualification:e.target.value}})} />
                </div>
              </div>

                <div className="row form-group mb-4">
                <div className="col-md-12"><h3>Location</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Location"
                  value={job.location}
            onChange={e => this.setState({ job: {...job, location:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group mb-4">
                <div className="col-md-12"><h3>Salary</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Expected Salary"
                  value={job.salary}
            onChange={e => this.setState({ job: {...job, salary:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group mb-4">
                <div className="col-md-12"><h3>Job Description</h3></div>
                <div className="col-md-12 mb-3 mb-md-0">
                  <input type="text" className="form-control" placeholder="Description"
                rows={5}
                rowsmax={5}
                  value={job.jobDescription}
            onChange={e => this.setState({ job: {...job, jobDescription:e.target.value}})} />
                </div>
              </div>
              </form>
              </div>
              </div>
               <br/>
          <button className="btn btn-primary  py-2 px-5" onClick={this.post.bind(this)}>Post Job</button>
          </div>
          </div>
          </div>
          </div>         
)}
};
export default Post;