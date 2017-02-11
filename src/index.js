import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory } from 'react-router';
import Home from './components/home';
import Profile from './components/profile';
import ListProfile from './components/listProfile';
import ReadBook from './components/readbook';
import './App.css';

const rootElement = global.document.getElementById('root');

const yolo =  <h1>sdcasdc</h1>;

ReactDOM.render(
  <Router history={browserHistory}>
   <Route path="/" component={Home} />
   <Route path="/profile" component={Profile} />
   <Route path="/search" component={ListProfile} />
   <Route path="/book" component={ReadBook} />
 </Router>
  ,
 rootElement
);
