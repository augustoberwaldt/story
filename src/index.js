import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FormLogin from './components/formLogin';
import {Button, Icon , Row} from 'react-materialize';
import LoginFacebook from  './components/LoginFacebook'


const rootElement = global.document.getElementById('root');



ReactDOM.render(
  <div className="container">
    <Row>
	<LoginFacebook
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
  
    cssClass="my-facebook-button-class"
      icon="fa-facebook" 
    />
      <div className="col s6">
          <img height="10%"  src = "/pictures/banner.jpg" />
       </div>
      <FormLogin></FormLogin>
    </Row>
  </div>
  ,
 rootElement
);
