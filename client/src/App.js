import React from 'react';
import Bar from './components/layout/Bar';
import './App.css';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';

import setAuthToken from './utils/setAuthToken'
import PrivateRoute from './components/routing/PrivateRoute';


if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <AuthState>
    <Router>
    <>
        <Bar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </>
    </Router>
    </AuthState>
  );
}

export default App;
