import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar 
      bg="dark"
      expand="lg"
      variant="dark"
      className="text-light"
    >
      <Container>
        <Navbar.Brand>
          <img
            src="./assets/images/hc4.png"
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
            <Nav.Link >Reservations</Nav.Link>
            <Nav.Link >Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  )
  {/* {(loggedIn && user.role === 0) ? 
          <CustomerDashboard /> :
        (loggedIn && user.role === 1) ? 
          <CheckerDashboard /> :
          <LoginForm />
        } */}
}

export default Header;