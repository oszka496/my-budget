import React from 'react';
import { bool, func } from 'prop-types';
import { Typography, AppBar, Box, Container } from '@material-ui/core';
import { useHeaderStyles } from './Header.styles';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';

const Header = ({ isUserLoggedIn, signOff }) => {
  const classes = useHeaderStyles();

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container className={classes.container}>
        <Box display="flex" flexGrow={1}>
          <PageLogo />
          <Typography variant="h5" color="primary">My Budget</Typography>
        </Box>
        {isUserLoggedIn && <PageNavBar signOff={signOff} />}
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  signOff: func.isRequired,
};

export default Header;
