import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';

 const Bar = () => {
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
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        Login
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default Bar