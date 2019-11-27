// import React, { Component } from 'react';
// import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
// import axios from 'axios'
// import Login from './singinui';
// class Signin extends Component{
//   state = {
//       users: [],
//       user: {
//         email: '',
//         password:''
//       }
//     }
    // verify=()=>{
    //   const { user } = this.state
    //   fetch(`http://localhost:4000/user/signin?email=${user.email}&password=${user.password}`)
    //   .then(console.log('logged in'))
    //   .catch( console.log('no login'))
    // }
    // login=()=>{
    // axios.post('http://192.168.10.18:4000/login',this.state.user)
    // .then(res=>console.log(res))
    // .catch(err=>console.log(err))
    // }
//   render(){
//     const { user } = this.state
//     return(
//         <Login/>
//   );
//     }
// };
// export default Signin;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios'
import { colors } from 'material-ui/styles';
import { white } from 'material-ui/styles/colors';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
 verify=()=>{
  const { user } = this.state
  fetch(`http://localhost:4000/user/signin?email=${user.email}&password=${user.password}`)
  .then(console.log('logged in'))
  .catch( console.log('no login'))
}
login=()=>{
axios.post('http://192.168.10.18:4000/login',this.state.user)
.then(res=>console.log(res))
.catch(err=>console.log(err))
}
 handleClick(){
  console.log(this.state)
 }
render() {
  const { user } = this.state
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
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField floatingLabelStyle={{color: white}}  hintStyle={{color: white}} inputStyle={{color: white}}
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Signin" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
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
export default Login;