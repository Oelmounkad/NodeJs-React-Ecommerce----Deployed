import React from 'react';
import Bar from './components/layout/Bar';

import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
    <Router>
    <>
        <Bar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </>
    </Router>
    </AuthState>
  );
}

export default App;
