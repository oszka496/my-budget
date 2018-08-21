import React from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
import { LoginForm } from '../../auth/components';
import { userLoggedIn } from '../../auth/auth.actions';
import { selectUserLoggedIn } from '../../auth/auth.selectors';

const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedIn: (username, token) => dispatch(userLoggedIn(username, token)),
});

const Home = ({ onUserLoggedIn, isUserLoggedIn }) =>
  (isUserLoggedIn || <LoginForm onUserLoggedIn={onUserLoggedIn} />);

Home.propTypes = {
  onUserLoggedIn: func.isRequired,
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
