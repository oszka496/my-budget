import { Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import NavLink from './NavLink';
import LogoutWrapper from './LogoutWrapper';

const PageNavBar = (props) => (
  <Navbar.Collapse>
    <Nav>
      <NavLink title="Categories" path="/categories" />
      <NavLink title="Transactions" path="/transactions" />
    </Nav>
    <LogoutWrapper {...props} />
  </Navbar.Collapse>
);

export default PageNavBar;
