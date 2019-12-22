import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/auth.js';
import Dashboard from './components/dashboard';
import OfferLetter from './components/offerLetter';
import UserManagement from './components/UserManagement/userManagement';
import AddUser from './components/UserManagement/addUser';
import EditUser from './components/UserManagement/editUser';
import Content from './components/Content/content';
import CreateContent from './components/Content/createContent'


ReactDOM.render(
  <BrowserRouter>
    <Route path='/' exact component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/offerLetter' component={OfferLetter} />
    <Route path='/userManagement' component={UserManagement} />
    <Route path='/addUser' component={AddUser} />
    <Route path='/editUser' component={EditUser} />
    <Route path='/content' component={Content} />
    <Route path='/createContent' component={CreateContent} />
  </BrowserRouter>
  ,document.getElementById('root'));
