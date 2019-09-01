import React from 'react';
import { bool, func } from 'prop-types';
import { Toolbar, Typography, AppBar, Box } from '@material-ui/core';
import { useCoreStyles } from '../core.styles';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';

const Header = ({ isUserLoggedIn, onUserLoggedOut }) => {
  const classes = useCoreStyles();

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar className={classes.container}>
        <Box display="flex" flexGrow={1}>
          <PageLogo />
          <Typography variant="h5" color="primary">My Budget</Typography>
        </Box>
        {isUserLoggedIn && <PageNavBar onUserLoggedOut={onUserLoggedOut} />}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  onUserLoggedOut: func.isRequired,
};

export default Header;
