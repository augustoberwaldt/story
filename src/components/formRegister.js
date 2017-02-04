import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../i18n';
import LoginFacebook from  './loginFacebook'

class FormLogin extends React.Component
{
   constructor(props)
   {
	  console.log(props); 
     super(props);
	 this.state = {
		 email: "",
		 name: "",
		 user: "",
		 password: "",  
	 };
	 this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);  
   }
  
   
   handleChange(event) 
   {
	 const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

     this.setState({
       [name]: value
     });
   }
   
   handleSubmit(event)
   {
	   
	   var request = require('request-promise');
	   var options = {
			method: 'POST',
			uri: 'https://github.com/augustoberwaldt/story-server',
			qs: {
				access_token: 'xxxxx xxxxx' 
			},
			headers: {
				'User-Agent': 'Request-Promise'
			},
			body: {
			  some: 'payload'
			}
		
	   };
   
	
	   request(options).then(function (repos) {
			console.log('User has %d repos', repos.length);
	   }).catch(function (err) {
			
	   });
		
		event.preventDefault();
   }

  render()
   {
    
    return (
	
  	  <div className="col s12" >
		  <form className="col s12" onSubmit={this.handleSubmit}>
		        <div className="row">
				   <div className="col s12">
					<LoginFacebook/>
				   </div>				  
			    </div>
			    <div className="row">
			       <div className="col s12">
					  <input 
					   name="email"
					   placeholder={I18n.lang.formLogin.email}
					   value={this.state.email}
					   onChange={this.handleChange}
					   type="text"
					  />
					</div>
			  	</div>
				<div className="row">
				   <div className="col s12">
					  <input 
					   name="name"
					   placeholder={I18n.lang.formLogin.name}
					   onChange={this.handleChange}
					   value={this.state.name}					   
					   type="text" 
					  />
				   </div>
				</div>
				<div className="row">
				   <div className="col s12">
					  <input 
					   name="user"  
					   placeholder={I18n.lang.formLogin.user}
					   value={this.state.user}					   
					   onChange={this.handleChange}
					   type="text" 
					   />
				   </div>
				</div>
				<div className="row">
				   <div className="col s12">
					  <input 
					   name="password" 
					   placeholder={I18n.lang.formLogin.password}
					   value={this.state.password}
					   onChange={this.handleChange}
					   type="password" 
					   />
				   </div>
				</div>
				<div className="row">
				  <div  className="col s12" >
				   
					<Button  className='blue' waves='light' >
						{I18n.lang.formLogin.signup} 
					</Button>
				
				 </div>
			  </div>
		  </form>
  		</div>
		
 	  );
  }

}

export default FormLogin;
