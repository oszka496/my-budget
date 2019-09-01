import { Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { bool, func } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';


const Header = ({ isUserLoggedIn, onUserLoggedOut }) => (
  <AppBar position="static">
    <Toolbar>
      <PageLogo />
      <Typography variant="h5">My Budget</Typography>
      {isUserLoggedIn && <PageNavBar onUserLoggedOut={onUserLoggedOut} />}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  onUserLoggedOut: func.isRequired,
};

export default Header;
