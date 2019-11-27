import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';
import './Contact.css';
class Contact extends Component {
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
    <div class="container">
        <div class="row d-flex mb-5 contact-info">
          <div class="col-md-12 mb-4">
          </div>
          <div class="w-100"></div>
          <div class="col-md-3">
            <p><span>Address:</span> St-4, Sector 17-D، National Hwy 5, Karachi, Karachi City, Sindh
FAST - National University of Computer & Emerging Sciences</p>
          </div>
          <div class="col-md-3">
            <p><span>Phone:</span> +92-331-0350398</p>
          </div>
          <div class="col-md-3">
            <p><span>Email:</span> Soffice@gmail.com </p>
          </div>
          <div class="col-md-3">
            <p><span>Website</span> www.Soffice.com</p>
          </div>
        </div>
        <div className="Container-b">
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Send Us A Message"
           />
           <br></br>
           <br></br>
           <br></br>
           <TextField
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
             <br/>
           <TextField 
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <div className="row form-group">
                <div className="col-md-12"></div>
                <div className="col-md-12 mb-3 mb-md-0">
                <TextField
                 hintText="Type Your Message Here"
                 multiline={true}
                rows={5}
                rowsMax={5}/>
                </div>
              </div>

        
           <br/>
           <RaisedButton label="Send" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
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
export default Contact;