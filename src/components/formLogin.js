import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../I18n';

class FormLogin extends React.Component
{
  constructor(props)
   {
     super(props);

   }

  render()
   {
    const trans = new I18n();
    return (
  	  <div className="col s6">
  		  <form className ='form'>
    		  <div>
    			  <input placeholder = {trans.getTranslater('formLogin', 'email')} type="text" />
    			</div>
    			<div>
    			  <input placeholder = {trans.getTranslater('formLogin', 'name')}  type="text" />
    			</div>
    			<div>
    			  <input placeholder = {trans.getTranslater('formLogin', 'user')}  type="text" />
    			</div>
          <div>
    			  <input placeholder = {trans.getTranslater('formLogin', 'password')} type="text" />
    			</div>
    			<div>
    				<Button waves='light'> {trans.getTranslater('formLogin', 'sign')} </Button>
    		  </div>
  		  </form>
  		</div>
 	  );
  }

}

export default FormLogin;
