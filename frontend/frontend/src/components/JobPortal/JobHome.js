import React,{Component} from 'react'
import './Contact.css'
class JobPortal extends Component{
  render(){
    return(
		<div>
		
				<div className="container">
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<div className="row fullscreen d-flex align-items-center justify-content-center">
						<div className="banner-content col-lg-12">
							<h1 className="text-white">
								<f1>1500+</f1> Jobs posted last week				
							</h1>	
							<p className="text-white"> <f1>Search and Post Jobs</f1> on just one click</p>
						</div>											
					</div>
				</div>
				<br></br>
					<br></br>
					<br></br>
					<br></br>
				<div className="container">
				<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-feature">
								<h2>Searching</h2>
								<f1>
									Look for jobs from all around the world.
								</f1>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-feature">
								<h2>Applying</h2>
								<f1>
									Apply for the jobs wherever you like in the world.
								</f1>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-feature">
								<h2>Security</h2>
								<f1>
									Secure your information through Soffice.
								</f1>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-feature">
								<h2>Notifications</h2>
								<f1>
									Get Notified about all the new happenings.
								</f1>
							</div>
						</div>																		
					</div>
				</div>	
		</div>
     )
}
}
export default JobPortal;
