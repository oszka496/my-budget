import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';
import { Container } from '@material-ui/core';

import { InitialDataLoader, Header } from 'core/components';
import { theme } from 'core/theme.styles';
import coreRoutesData from 'core/core.routes';
import { selectUserLoggedIn } from 'auth/auth.selectors';
import * as authActions from 'auth/auth.actions';
import authRoutesData from 'auth/auth.routes';
import { MessageList } from 'message/components';
import { Router } from 'components/Router';


const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = { authenticate: authActions.authenticate, signOff: authActions.signOff };


const App = ({ isUserLoggedIn, signOff }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header
        isUserLoggedIn={isUserLoggedIn}
        signOff={signOff}
      />
      <MessageList />
      <Container maxWidth="lg" style={{ flexGrow: 1 }}>
        { isUserLoggedIn ? (
          <InitialDataLoader>
            <Router {...coreRoutesData} />
          </InitialDataLoader>
        ) : <Router {...authRoutesData} /> }
      </Container>
    </ThemeProvider>
  </BrowserRouter>
);

App.propTypes = {
  signOff: func.isRequired,
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
