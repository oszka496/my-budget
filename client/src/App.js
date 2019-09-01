import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { ThemeProvider } from '@material-ui/styles';

import { Header, MessageList, Routes } from 'core/components';
import { raiseError } from 'core/message.actions';
import { theme } from 'core/theme.styles';
import { selectUserLoggedIn } from 'auth/auth.selectors';
import { userLoggedIn, userLoggedOut } from 'auth/auth.actions';
import { LoginForm } from 'auth/components';
import './App.css';


const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedIn: (username, token) => {
    localStorage.setItem('token', token);
    dispatch(userLoggedIn(username, token));
  },
  onLoginFailed: error => dispatch(raiseError(error)),
  onUserLoggedOut: () => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
  },
});


const App = ({ onUserLoggedIn, isUserLoggedIn, onLoginFailed, onUserLoggedOut }) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header
        isUserLoggedIn={isUserLoggedIn}
        onUserLoggedOut={onUserLoggedOut}
      />
      <MessageList />
      <div style={{ margin: '0 20%' }}> {/* TODO: Style properly */}
        { isUserLoggedIn ? <Routes /> : <LoginForm onUserLoggedIn={onUserLoggedIn} onLoginFailed={onLoginFailed} />}
      </div>
    </ThemeProvider>
  </BrowserRouter>
);

App.propTypes = {
  onUserLoggedIn: func.isRequired,
  onLoginFailed: func.isRequired,
  onUserLoggedOut: func.isRequired,
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
