import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/auth.js';
import Dashboard from './components/dashboard'
import OfferLetter from './components/offerLetter'


ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/offerLetter' component={OfferLetter} />
  </BrowserRouter>
  ,document.getElementById('root'));
