import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Icon} from 'react-materialize';
import I18n from '../I18n';
import FacebookLogin  from 'react-facebook-login';

class LoginFacebook extends React.Component
{
  constructor(props)
  {
     super(props);

  }

  responseFacebook = (response) => {
    console.log(response);
  };

  render()
  {
	const trans = new I18n();
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
		    cssClass="btn waves-effect waves-light blue"
		    icon="fa-facebook"
		    textButton = {trans.getTranslater('formLogin', 'signupFacebook')}
      />
    );
  }

}

export default LoginFacebook;
