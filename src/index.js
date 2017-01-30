import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FormLogin from './components/formLogin';
import {Button, Icon , Row} from 'react-materialize';
import LoginFacebook from  './components/LoginFacebook'
import { Router, Route, Link, browserHistory } from 'react-router'

const rootElement = global.document.getElementById('root');

function De() {
 return (<div className="container">
    <Row>
    	<LoginFacebook/>
      <div className="col s6">
       </div>
      <FormLogin></FormLogin>
    </Row>
  </div>);
}

function Po() {
 return (
   <div className="container">
     <h1>sascascascas </h1>
  </div>);
}


ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={De} />
   <Route path="/test" component={Po} />
 </Router>
  ,
 rootElement
);
