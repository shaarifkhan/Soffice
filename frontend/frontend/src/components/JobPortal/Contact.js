import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import './Contact.css';
import axios from 'axios' 
class Contact extends Component {
  
    state={
      content:{
      name:'',
      email:'',
      message:'',
      sent:false,
      }
    }
  
  
  handleClick(){
    console.log(this.state)
  }
  send=()=>{
    console.log(this.state);
  axios.post('http://192.168.10.11:4000/register',this.state)
  .then(this.setState(()=>({
    sent:true
  })))
  .catch(this.setState(()=>({
    sent:false
  })))
  
  }
  render() {
    const {content} =this.state
    if(this.state.sent===true)
    {
      return(
    <div className="container">
		<br></br><br></br>
		<br></br><br></br>
    <br></br>
		<h1>Thankyou for contacting us :') </h1>
    </div>
      )
    }
    if(this.state.sent===false)
    {
      return(
    <div className="container">
		<br></br><br></br>
		<br></br><br></br>
    <br></br>
		<h1>Your message was failed <br></br> to deliver :( </h1>
    </div>
      )
    }
    return (
    <div className="container">
    <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="overlay"></div>
      <div className="container" >
        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start" data-scrollax-parent="true">
          <div className="col-md-8 ftco-animate text-center text-md-left mb-5" data-scrollax=" properties: { translateY: '70%' }">
            <h1 className="mb-3 bread" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Contact Us</h1>
          </div>
        </div>
      </div>
    <div className="container">
        <div className="row d-flex mb-5 contact-info">
          <div className="col-md-12 mb-4">
          </div>
          <div className="w-100"></div>
          <div className="col-md-3">
            <p><span>Address:</span> St-4, Sector 17-D، National Hwy 5, Karachi, Karachi City, Sindh
FAST - National University of Computer & Emerging Sciences</p>
          </div>
          <div className="col-md-3">
            <p><span>Phone:</span> +92-331-0350398</p>
          </div>
          <div className="col-md-3">
            <p><span>Email:</span> Soffice@gmail.com </p>
          </div>
          <div className="col-md-3">
            <p><span>Website</span> www.Soffice.com</p>
          </div>
        </div>
        <div className="container">
        <MuiThemeProvider>
          <div>
      <AppBar
             title="Send Us a Message"
           />
           </div>
           </MuiThemeProvider>
           <div className="ftco-section bg-light">
        <div className="container-center">
       
          <div className="container-center">
          
			     <form action="#" className="p-5 bg-white">

           <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Name</label>
                  <input  type="text" id="fullname" className="form-control" placeholder="Enter Your Name"
            value={content.name}
            onChange={e => this.setState({ content: {...content, name:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Email</label>
                  <input  type="text" id="fullname" className="form-control" placeholder="Enter your Email ID"
            value={content.email}
            onChange={e => this.setState({ content: {...content, email:e.target.value}})} />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12 mb-3 mb-md-0">
                  <label className="font-weight-bold" htmlFor="fullname">Message</label>
                  <input  type="text" id="fullname" className="form-control" placeholder="Type your message here"
            value={content.message}
            onChange={e => this.setState({ content: {...content, message:e.target.value}})}  
                rows={5}
                rowsmax={5} />
                </div>
              </div>
              </form>
              </div>
              </div>
          <button className="btn btn-primary  py-2 px-5" onClick={this.send.bind(this)}>Send</button>
          </div>
          </div>
          </div>
          </div>
         
)}
};
export default Contact;