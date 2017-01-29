import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../I18n';

class FormLogin extends React.Component
{
   constructor(props)
   {
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
   componentDidMount() {
	   
	   
	   //alert('test');
   }
   componentWillMount() {
	   
	   
	 //  alert('test2');
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
    const trans = new I18n();
    return (
  	  <div className="col s6">
	      <fieldset> 
			  <form className='form' onSubmit={this.handleSubmit}>
				  <div>
					  <input 
					   name="email"
					   placeholder={trans.getTranslater('formLogin', 'email')}
					   value={this.state.email}
					   onChange={this.handleChange}
					   type="text"
					  />
					</div>
					<div>
					  <input 
					   name="name"
					   placeholder={trans.getTranslater('formLogin', 'name')}
					   onChange={this.handleChange}
                       value={this.state.name}					   
					   type="text" 
					  />
					</div>
					<div>
					  <input 
					   name="user"  
					   placeholder={trans.getTranslater('formLogin', 'user')}
                       value={this.state.user}					   
					   onChange={this.handleChange}
					   type="text" 
					   />
					</div>
					<div>
					  <input 
					   name="password" 
					   placeholder={trans.getTranslater('formLogin', 'password')}
					   value={this.state.password}
					   onChange={this.handleChange}
					   type="password" 
					   />
					</div>
					<div>
					  <span>
					    <Button  className='blue' waves='light' >
							{trans.getTranslater('formLogin', 'signup')} 
					    </Button>
					  </span>
				  </div>
			  </form>
		  </fieldset> 
  		</div>
 	  );
  }

}

export default FormLogin;
