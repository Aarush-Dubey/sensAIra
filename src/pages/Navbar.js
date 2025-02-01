import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Inline CSS for Navbar
const navbarStyles = {
  nav: {
    backgroundColor: '#6a82fb',  // Navbar background color
    width: '110%',               // Full width of the page
    marginLeft: '-1rem',
    marginbottom: '2rem',           
  },
  navLink: {
    color: '#fff',                // Navbar link color
    marginRight: '1rem',          // Margin between the links
  },
  navbarBrand: {
    color: '#fff',                // Navbar brand (logo) color
    fontSize: '1.75rem',          // Font size for the brand
    fontWeight: 'bold',           // Make the brand text bold
  },
};

const CommonNavbar = () => {
  return (
    <Navbar expand="lg" style={navbarStyles.nav}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={navbarStyles.navbarBrand}>
          sensAIra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" style={navbarStyles.navLink}>Home</Nav.Link>
            <Nav.Link as={Link} to="/product" style={navbarStyles.navLink}>Product</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={navbarStyles.navLink}>Contact</Nav.Link>
            <Nav.Link as={Link} to="/buy-now" style={navbarStyles.navLink}>Buy Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CommonNavbar;
