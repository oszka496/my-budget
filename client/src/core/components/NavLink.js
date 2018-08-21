import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
import React from 'react';
import { string } from 'prop-types';

const NavLink = ({ title, path }) => (
  <LinkContainer to={{ pathname: path }}>
    <NavItem href="#">
      {title}
    </NavItem>
  </LinkContainer>
);

NavLink.propTypes = {
  title: string.isRequired,
  path: string.isRequired,
};

export default NavLink;
