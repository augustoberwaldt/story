import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';
import Profile from './components/profile';



const rootElement = global.document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={Home} />
   <Route path="/test" component={Profile} />
 </Router>
  ,
 rootElement
);
