import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { white } from 'material-ui/styles/colors';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      userType:'',
      email:'',
      password:'',
      in:true,
      signed:false
    }
  }
  handleClick(){
    console.log(this.state)

  }
  register=()=>{
    console.log(this.state);
  axios.post('http://192.168.10.11:4000/register',this.state)
  .then(this.setState(()=>({
    signed:true,
    in:true
    })))
  .catch(this.setState(()=>({
    signed:false,
    in:false
    })))
  }
  render() {
    if(this.state.signed===true && this.state.in===true)
    {
      return (<Redirect to='/'/>)
    }
    if(this.state.signed===false && this.state.in===false)
    {
      return(
        <div className="container">
		  <br></br><br></br>
		  <br></br><br></br>
      <br></br>
		  <h1>Sign up failed please<br></br> try again </h1>
      </div>
      )
    }
    return (
      
      <div>
        
        <MuiThemeProvider>
        <AppBar
      
             title="Sign Up For Free!"
           />
          <div className="container">
           <br></br>
           <br></br>
           <br></br>
           
           <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
             hintText="Enter your Name"
             floatingLabelText="Name"
             onChange = {(event,newValue) => this.setState({name:newValue})}
             />
             <br/>
           <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
             hintText="Enter your User Type"
             floatingLabelText="User Type"
             onChange = {(event,newValue) => this.setState({userType:newValue})}
             />
           <br/>
           <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Sign up" primary={true} style={style} onClick={(event) => this.register(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,

  'inputLabel': {
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
export default Register;