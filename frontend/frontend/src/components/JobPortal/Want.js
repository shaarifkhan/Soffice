import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Contact.css';
class Want extends Component {
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
    <div className="container">
      <br></br><br></br><br></br>
    <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start" data-scrollax-parent="true">
          <div className="col-md-8 ftco-animate text-center text-md-left mb-5" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Look for Jobs</h1>
            <p className="mb-4 mt-5 pt-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">We have <span className="number" data-number="850000">10000</span> great job offers you deserve!</p>
            <h1 className="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Your Dream <br></br><span>Job is Waiting</span></h1>
          </div>
        </div>
            <div>
           <MuiThemeProvider>
          <div>
      <AppBar
             title="Recently Added Jobs"
           />
           </div>
           </MuiThemeProvider>
           </div>
           <div className="ftco-section bg-light">
        <div className="container-center">
       
          <div className="container-center">
          <div className="col-md-12 ftco-animate">
						<div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
          <div className="mb-4 mb-md-0 mr-5">
                <div className="job-post-item-header d-flex align-items-center">
                  <h2 className="mr-3 text-black h3">Frontend Development</h2>
                  <div className="badge-wrap">
                   <span className="bg-primary text-white badge py-2 px-3">Partime</span>
                  </div>
                </div>
                </div>
                </div>
                <br></br><br></br>
                <div className="col-md-12 ftco-animate">
						<div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
                <div className="mb-4 mb-md-0 mr-5">
						   <div className="job-post-item-header d-flex align-items-center">
						     <h2 className="mr-3 text-black h4">Full Stack Developer</h2>
						     <div className="badge-wrap">
						      <span className="bg-warning text-white badge py-2 px-3">Full Time</span>
						     </div>
						    </div>
                            </div>
                            </div>
                            </div>
                            <br></br><br></br>
                            <div className="col-md-12 ftco-animate">
           <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

              <div className="mb-4 mb-md-0 mr-5">
               <div className="job-post-item-header d-flex align-items-center">
                 <h2 className="mr-3 text-black h4">Open Source Interactive Developer</h2>
                 <div className="badge-wrap">
                  <span className="bg-info text-white badge py-2 px-3">Freelance</span>
                 </div>
               </div>
               </div>
               </div>
               </div>

            </div>
            </div>
            </div>
           </div>
           </div>

)}
};

   
export default Want;