import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';
import Profile from './components/profile';
import './App.css';

const rootElement = global.document.getElementById('root');

const yolo =  <h1>sdcasdc</h1>;

ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={Home} />
   <Route path="/login" component={Profile} />
 </Router>
  ,
 rootElement
);
