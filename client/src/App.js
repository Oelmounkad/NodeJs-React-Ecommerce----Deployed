import React from 'react';
import Navbar from './components/layout/Navbar';

import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
    <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
    </>
    </Router>
  );
}

export default App;
