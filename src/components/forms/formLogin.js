import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../../i18n';
import LoginFacebook from  './../loginFacebook'
import { Router } from 'react-router';
import  './../../css/formLogin.css';
class FormLogin extends React.Component
{
   constructor(props)
   {
	  
     super(props);
	 this.state = {
		 user: "",
		 password: "",
		 requestMsg: ""  
	 };
	 this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this); 
     this.result       = this.result.bind(this);  
   }
  
   
   handleChange(event) 
   {
	 const target = event.target;
     const value  = target.type === 'checkbox' ? target.checked : target.value;
     const name   = target.name;

     this.setState({
       [name]: value
     });

   }
   
   handleSubmit(event)
   {
	   
	   var request = require('request-promise');
	   var options = {
	   	   
			method: 'POST',
			   resolveWithFullResponse: true ,
			uri: 'http://localhost/story-server/public/user/login',
			headers: {
				"Content-Type": "application/json",
				'User-Agent': 'Request-Promise'
			},
			form:this.state,
			json: true
	   };
   
	
	   request(options)
	   .then(this.result)
	   .catch(function (err) {
          console.log(err); 			
	   });
		
	   event.preventDefault();
   }
   
   result(repos) 
   {

       this.setState ({
            requestMsg : repos.body.msg 
       });
  

   }

  render()
   {
    
    return (
	
  	  <div className="col s12" >
		  <form className="col s12" onSubmit={this.handleSubmit}>
		        
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
					  <p className="respmsg" >{this.state.requestMsg}</p>
				
				 </div>
			  </div>
			  <div className="row">
				  <div  className="col s12" >
					<Button  className='blue' waves='light' >
						{I18n.lang.formLogin.login} 
					</Button>
				 </div>
			  </div>
		  </form>
  		</div>
		
 	  );
  }

}

export default FormLogin;
