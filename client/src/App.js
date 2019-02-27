import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bool, func } from 'prop-types';

import { Header, MessageList, Routes } from 'core/components';
import { raiseError } from 'core/message.actions';
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
    <Fragment>
      <Header
        isUserLoggedIn={isUserLoggedIn}
        onUserLoggedOut={onUserLoggedOut}
      />
      <MessageList />
      <Grid className="App">
        { isUserLoggedIn ? <Routes /> : <LoginForm onUserLoggedIn={onUserLoggedIn} onLoginFailed={onLoginFailed} />}
      </Grid>
    </Fragment>
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
