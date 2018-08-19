import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import LoginForm from '../../auth/components/LoginForm';
import { userLoggedIn } from '../../auth/auth.actions';

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedIn: (username, token) => dispatch(userLoggedIn(username, token)),
});

function Home(props) {
  const { onUserLoggedIn } = props;
  return <LoginForm onUserLoggedIn={onUserLoggedIn} />;
}

Home.propTypes = {
  onUserLoggedIn: func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
