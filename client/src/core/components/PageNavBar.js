import { Nav, Navbar, NavItem } from 'react-bootstrap';
import React from 'react';

import { NavLink, SettingsNavLink } from 'core/components';
import { routes } from 'core/components/Routes';
import { LogoutButton } from 'auth/components';


const PageNavBar = (props) => (
  <Navbar.Collapse>
    <Nav>
      <NavLink title={routes.categories.label} path={routes.categories.href} />
      <NavLink title={routes.transactions.label} path={routes.transactions.href} />
    </Nav>
    <Nav pullRight>
      <SettingsNavLink className="xs-hide" />
      <NavItem href="#">
        <LogoutButton {...props} />
      </NavItem>
    </Nav>
  </Navbar.Collapse>
);

export default PageNavBar;
