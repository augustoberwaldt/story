import React from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin  from 'react-facebook-login';
import I18n from '../i18n';


class LoginFacebook extends React.Component
{
  

  responseFacebook = (response) => {
    console.log(response);
  };

  render()
  {
    return (
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        callback={this.responseFacebook}
		    cssClass="btn waves-effect waves-light blue btfc"
		    icon="fa-facebook"
		    textButton={I18n.lang.formLogin.signupFacebook}
      />
    );
  }

}

export default LoginFacebook;
