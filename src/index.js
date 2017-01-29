import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import FormLogin from './components/formLogin';

const rootElement = global.document.getElementById('root');

ReactDOM.render(
  <div>
    <FormLogin></FormLogin>
  </div>
  ,
 rootElement
);
