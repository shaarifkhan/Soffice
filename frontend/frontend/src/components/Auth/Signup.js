import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:'',
      userType:'',
      email:'',
      password:''
    }
  }
  handleClick(){
    console.log(this.state)
  }
  render() {
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
           <RaisedButton label="Signup" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
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
export default Register;