import React from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import './Head.css'
function Head() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">PROFILE PAGE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Skills</Nav.Link>
      <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>  
    );
};

export default Head;
