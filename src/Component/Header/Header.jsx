import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Navlink from '../NavLink/NavLink.json';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
   
      <Navbar expand="lg" className="fixed-top d-flex justify-content-center align-items-center header-transparent " id="header">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {Navlink.map((link, index) => (
                <Link key={index} to={link.Link} className="link">
                  {link.NavLink}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default Header;

