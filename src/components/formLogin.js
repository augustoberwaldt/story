import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../i18n';
class Register extends React.Component 
{
  constructor(props)
   {
     super(props);
	 this.state = {
		 user: "",
		 password: "",  
	 };
	  
   }

  render() {
    return (
  	  <div className="col s6">
		  <form className='col s6'  onSubmit={this.handleSubmit}>
			  <div  className="row">
				  <input 
				   name="user"
				   placeholder={I18n.lang.formLogin.email}
				   value={this.state.email}
				   onChange={this.handleChange}
				   type="text"
				  />
				</div>
				<div  className="row">
				  <input 
				   name="name"
				   placeholder={I18n.lang.formLogin.name}
				   onChange={this.handleChange}
				   value={this.state.name}					   
				   type="text" 
				  />
				</div>
			
		  </form>
  		</div>
 	);
}
