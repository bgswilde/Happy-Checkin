import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Auth from '../../utils/auth';

function Header() {
  return (
    <Navbar 
      bg="dark"
      expand="lg"
      variant="dark"
      className="text-light"
    >
      <Container>
        <Navbar.Brand href="../">
          <img
            src="/assets/images/hc4.png"
            width="140"
            className="d-inline-block align-top"
            alt="Happy Checkin Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* To be rendered if not logged in */}
            <Nav.Link href="/login" color="light">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            {/* To be rendered if logged in */}
            <Nav.Link href="/reservation">Reservations</Nav.Link>
            <Nav.Link onClick={Auth.logout()}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;