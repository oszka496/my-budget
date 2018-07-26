import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../logo.svg';

function Header() {
  return (
    <Navbar staticTop>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
            <span>&nbsp;My budget</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to={{ pathname: '/categories' }}>
            <NavItem eventKey={1} href="#">
              Categories
            </NavItem>
          </LinkContainer>
          <LinkContainer to={{ pathname: '/transactions' }}>
            <NavItem eventKey={2} href="#">
              Transactions
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
