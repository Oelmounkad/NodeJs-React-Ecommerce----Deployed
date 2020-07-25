import React,{useContext} from 'react'
import {Navbar,Nav} from 'react-bootstrap';

import AuthContext from '../../context/auth/AuthContext'

 const Bar = () => {

    const authContext = useContext(AuthContext)
    const {user,isAuthenticated, logout} = authContext 

    const onLogout = () => {
      logout()
    }

    const authLinks = (
      <>
     <p>Hello {user && user.name}</p> 
        <Nav.Link onClick={onLogout}><i className="fas fa-sign-out-alt" /> Logout</Nav.Link>
      </>
    )
    const guestLinks = (
      <>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login
      </Nav.Link>
      </>
    )

    return (
        <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/"><i className="fas fa-dumpster" />{' '}Ecommerce</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">my Products</Nav.Link>
      <Nav.Link href="#pricing">My cart</Nav.Link>
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