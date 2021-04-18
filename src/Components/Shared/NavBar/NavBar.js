import { faPhoneSquareAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import './NavBar.css';

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/dashBoard">DashBoard</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/dashBoard">Admin Panel</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="/login"><FontAwesomeIcon icon={faSignInAlt} /> LogIn</Nav.Link>
            <Nav.Link href="/admin"><FontAwesomeIcon icon={faPhoneSquareAlt} /> Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;