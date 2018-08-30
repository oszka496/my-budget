import React, { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import { Header, MessageList } from './core/components';
import { selectUserLoggedIn } from './auth/auth.selectors';
import { userLoggedIn, userLoggedOut } from './auth/auth.actions';
import { LoginForm } from './auth/components';
import { CategoryLayout } from './categories/components';
import { TransactionLayout } from './transactions/components';
import './App.css';


const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedIn: (username, token) => {
    localStorage.setItem('token', token);
    dispatch(userLoggedIn(username, token));
  },
  onUserLoggedOut: () => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
  },
});


const App = ({ onUserLoggedIn, isUserLoggedIn, onUserLoggedOut }) => (
  <BrowserRouter>
    <Fragment>
      <Header
        isUserLoggedIn={isUserLoggedIn}
        onUserLoggedOut={onUserLoggedOut}
      />
      <MessageList />
      <Grid className="App">
        {
          isUserLoggedIn
            ? (
              <Switch>
                <Route path="/categories" component={CategoryLayout} />
                <Route path="/transactions" component={TransactionLayout} />
                <Route render={() => (<Redirect to="/transactions" />)} />
              </Switch>
            )
            : <LoginForm onUserLoggedIn={onUserLoggedIn} />
        }
      </Grid>
    </Fragment>
  </BrowserRouter>
);

App.propTypes = {
  onUserLoggedIn: func.isRequired,
  onUserLoggedOut: func.isRequired,
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
