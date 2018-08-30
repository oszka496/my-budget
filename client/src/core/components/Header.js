import React from 'react';
import { Navbar } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';


const Header = ({ isUserLoggedIn, onUserLoggedOut }) => (
  <Navbar staticTop>
    <PageLogo />
    {isUserLoggedIn && <PageNavBar onUserLoggedOut={onUserLoggedOut} />}
  </Navbar>
);

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  onUserLoggedOut: func.isRequired,
};

export default Header;
