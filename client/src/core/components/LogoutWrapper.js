import { Nav, NavItem } from 'react-bootstrap';
import React from 'react';
import { func } from 'prop-types';
import { LogoutButton } from '../../auth/components';

const LogoutWrapper = ({ onUserLoggedOut }) => (
  <Nav pullRight>
    <NavItem>
      <LogoutButton onUserLoggedOut={onUserLoggedOut} />
    </NavItem>
  </Nav>
);

LogoutWrapper.propTypes = {
  onUserLoggedOut: func.isRequired,
};

export default LogoutWrapper;
