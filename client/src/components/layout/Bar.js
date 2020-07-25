import React,{useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import AuthContext from '../../context/auth/AuthContext'
import {Link} from 'react-router-dom'
import About from '../pages/About';

 const Bar = () => {

    const authContext = useContext(AuthContext)
    const {user,isAuthenticated, logout} = authContext 

    const onLogout = () => {
      logout()
    }

    const authLinks = (
      <>
     <Link to="/about">Hello {user && user.name}</Link> 
        <Link to="" onClick={onLogout}><i className="fas fa-sign-out-alt" /> Logout</Link>
      </>
    )
    const guestLinks = (
      <>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      </>
    )

    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand><i className="fas fa-dumpster" />{' '}Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Link to="/browse">Browse Products</Link>
      <Link to="/myproducts">my Products</Link>
      <Link to="/mycart">My cart</Link>
    </Nav>
    <Nav>
     { isAuthenticated ?  authLinks : guestLinks}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Bar