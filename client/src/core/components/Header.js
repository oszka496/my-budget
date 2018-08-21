import React from 'react';
import { Navbar } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import { selectUserLoggedIn } from '../../auth/auth.selectors';
import { userLoggedOut } from '../../auth/auth.actions';
import PageNavBar from './PageNavBar';
import PageLogo from './PageLogo';

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedOut: () => {
    localStorage.removeItem('token');
    dispatch(userLoggedOut());
  },
});

const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const Header = ({ isUserLoggedIn, onUserLoggedOut }) => (
  <Navbar staticTop>
    <PageLogo />
    {isUserLoggedIn && <PageNavBar onUserLoggedOut={onUserLoggedOut} />}
  </Navbar>
);

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
  onUserLoggedOut: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
