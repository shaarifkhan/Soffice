import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios'
import { white } from 'material-ui/styles/colors';
import {Redirect} from 'react-router-dom';
class Signin extends Component {
constructor(props){
  super(props);
  this.state={
  email:'',
  password:''
  // inactive:false,
  // active:false,
  // userType:'company',
  // post:false,
  // done:false
  }
 }

login=()=>{
axios.post('http://192.168.10.11:4000/login',this.state,{withCredentials:true})
.then(res=>{
  console.log(res)
})
.catch((error)=>{
  console.log(error.response)
})
}
postlogin=()=>{
  axios.post('http://192.168.10.11:4000/login',this.state)
  .then(res=>{
    this.setState({
      userType:res.data,
      active:true,
      inactive:false,
      post:this.props.location.state.job.postj})
    })
  .catch( this.setState(()=>({
      inactive:true,
      active:false,
      post:this.props.location.state.job.postj  
    }))
  )
  }
post=()=>{
  console.log(this.props.location.state.job)
  axios.post('http://192.168.10.11:4000/post',this.props.location.state.job)
  .then(this.setState(()=>({
    done:true
  })))
  .catch(this.setState(()=>({
    done:false
  })))
 
}
render() {
  // if(this.state.done===true && this.state.post==true)
  // {
  //   return(
  //    <div className="container">
	// 	  <br></br><br></br>
	// 	  <br></br><br></br>
  //     <br></br>
	// 	  <h1>Job successfully posted</h1>
  //     <Redirect to='/JobPortal'/>
  //     </div>
  //   )
  // }
  // if(this.state.done===false && this.state.post==true)
  // {
  //   return(
  //    <div className="container">
	// 	  <br></br><br></br>
	// 	  <br></br><br></br>
  //     <br></br>
	// 	  <h1>Job did not post successfully</h1>
  //     </div>
  //   )
  // }

  // if(this.state.active===true && this.state.inactive===false && this.state.userType==='company' && this.state.post===true)
  // {
  //   return(
  //    <div className="container">
	// 	  <br></br><br></br>
	// 	  <br></br><br></br>
  //     <br></br>
	// 	  <h1>Login Successful!<br></br> Click the Post button to post the job </h1>
  //     <MuiThemeProvider>
  //       <div>
  //       <RaisedButton label="Post" primary={true} style={style} onClick={(event) => this.post(event)}/>
  //       </div>
  //     </MuiThemeProvider>
  //     </div>
  //   )
  // }
  // if(this.state.active===true && this.state.inactive===false && this.state.userType==='user' && this.state.post===true)
  // {
  //   return(
  //    <div className="container">
	// 	  <br></br><br></br>
	// 	  <br></br><br></br>
  //     <br></br>
	// 	  <h1>You are not authorized to<br></br>post a new job  </h1>
  //     </div>
  //   )
  // }
  // if(this.state.active===true && this.state.inactive===false && this.state.userType==='user' && this.state.post===false)
  // {
  //   return(
  //   <Redirect to='/Empdash'/>)
  // }
  // if(this.state.active===true && this.state.inactive===false && this.state.userType==='company' && this.state.post===false)
  // {
  //   return(
  //   <Redirect to='/Hrdash'/>)
  // }
  // if(this.state.active===false && this.state.inactive===true )
  // {
  //   return(
  //  <div className="container">
	// 	<br></br><br></br>
	// 	<br></br><br></br>
  //   <br></br>
	// 	<h1>Login Unsuccessful :( </h1>
  //   </div>
  //   )
  // }
  // if(this.state.post==true)
  // {
  //   return (
  //     <div>
  //       <MuiThemeProvider>
  //         <div>
  //         <AppBar
  //            title="Sign In To Your Account"
  //          />
  //          <br></br>
  //          <br></br>
  //          <br></br>
  //          <br></br>
  //          <br></br>
  //          <br></br>
  //          <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
  //            hintText="Enter your Email"
  //            floatingLabelText="Email"
  //            onChange = {(event,newValue) => this.setState({email:newValue})}
  //            />
  //          <br/>
  //            <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
  //              type="password"
  //              hintText="Enter your Password"
  //              floatingLabelText="Password"
  //              onChange = {(event,newValue) => this.setState({password:newValue})}
  //              />
  //            <br/>
  //            <RaisedButton label="Sign in" primary={true} style={style} onClick={(event) => this.postlogin(event)}/>
  //        </div>
  //        </MuiThemeProvider>
  //     </div>
  //   );
  // }
  // if(this.state.post==false)
  // {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Sign In To Your Account"
           />
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Sign in" primary={true} style={style} onClick={(event) => this.login(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
   }}
// }
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
export default Signin;