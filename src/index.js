import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FormLogin from './components/formLogin';
import {Button, Icon , Row} from 'react-materialize';


const rootElement = global.document.getElementById('root');



ReactDOM.render(
  <div className="container">
    <Row>
      <div className="col s6">
          <img height="10%"  src = "/pictures/banner.jpg" />
       </div>
      <FormLogin></FormLogin>
    </Row>
  </div>
  ,
 rootElement
);
