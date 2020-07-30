import React from 'react';
import Bar from './components/layout/Bar';
import './App.css';
import {BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import AuthState from './context/auth/AuthState';
import Productstate from './context/product/ProductState'
import CartState from './context/cart/CartState'

import setAuthToken from './utils/setAuthToken'

import PrivateRoute from './components/routing/PrivateRoute';

import About from './components/pages/About';
import MyProducts from './components/pages/MyProducts';
import Browse from './components/pages/Browse';
import MyCart from './components/pages/MyCart';


if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <AuthState>
      <Productstate>
      <CartState>
    <Router>
    <>
        <Bar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/myproducts" component={MyProducts} />
          <PrivateRoute exact path="/mycart" component={MyCart} />
          <Route exact path="/browse" component={Browse} />
        </Switch>
    </>
    </Router>
    </CartState>
    </Productstate>
    </AuthState>
  );
}

export default App;
