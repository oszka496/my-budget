import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { Header, MessageList } from './core/components';
import { selectUserLoggedIn } from './auth/auth.selectors';
import { userLoggedIn } from './auth/auth.actions';
import { LoginForm } from './auth/components';
import { CategoryLayout } from './categories/components';
import { TransactionLayout } from './transactions/components';

const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedIn: (username, token) => {
    localStorage.setItem('token', token);
    dispatch(userLoggedIn(username, token));
  },
});

const App = ({ onUserLoggedIn, isUserLoggedIn }) => (
  <BrowserRouter>
    <Fragment>
      <Header />
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
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
