import React from 'react';
import { bool, func } from 'prop-types';
import { Toolbar, Typography, AppBar } from '@material-ui/core';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';

const Header = ({ isUserLoggedIn, onUserLoggedOut }) => (
  <AppBar position="static" color="inherit" elevation={1}>
    <Toolbar>
      <PageLogo />
      <Typography variant="h5" color="primary">My Budget</Typography>
      {isUserLoggedIn && <PageNavBar onUserLoggedOut={onUserLoggedOut} />}
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  onUserLoggedOut: func.isRequired,
};

export default Header;
