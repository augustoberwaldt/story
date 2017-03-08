import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';
import Profile from './components/profile';
import ListProfile from './components/listProfile';
import ReadBook from './components/readbook';
import ProfileWrite from './components/profileWrite';
import './css/App.css';

const rootElement = global.document.getElementById('root');



ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={Home} />
   <Route path="/profile" component={Profile} />
   <Route path="/search" component={ListProfile} />
   <Route path="/book" component={ReadBook} />
   <Route path="/profileWrite" component={ProfileWrite} />
 </Router>
  ,
 rootElement
);
