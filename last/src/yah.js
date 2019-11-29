import React,{Component} from 'react';
import hello from './hello.css';



class Yah extends Component{
  render(){
    return(
		<div className="container">
		<div id="sidebar">
            <ul>
                <a href="./info.js"><li>
                  Personal Information
                </li></a>
                <li>Qualification</li>
                <a href="./yah.js"><li>Attendance</li></a>
                <a href="https://www.google.com" ><li>Develop</li></a>
            </ul>
</div>
<div id="Data"><br/>
<h1>Hello</h1>
<p>This is admin panel</p>
</div>
		</div>
     )
}
}
export default Yah;
