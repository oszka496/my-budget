import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';

import { Header, MessageList, Routes } from 'core/components';
import { theme } from 'core/theme.styles';
import { selectUserLoggedIn } from 'auth/auth.selectors';
import { LoginForm } from 'auth/components';
import './App.css';
import * as authActions from 'auth/auth.actions';
import { useCoreStyles } from './core/core.styles';


const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = { authenticate: authActions.authenticate, signOff: authActions.signOff };


const App = ({ isUserLoggedIn, authenticate, signOff }) => {
  const classes = useCoreStyles();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header
          isUserLoggedIn={isUserLoggedIn}
          signOff={signOff}
        />
        <MessageList />
        <div className={classes.container}> {/* TODO: Style properly */}
          {
            isUserLoggedIn
              ? <Routes />
              : <LoginForm authenticate={authenticate} />
          }
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

App.propTypes = {
  authenticate: func.isRequired,
  signOff: func.isRequired,
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
