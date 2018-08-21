import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { bool, func } from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import { LogoutButton } from '../../auth/components';
import { selectUserLoggedIn } from '../../auth/auth.selectors';
import { userLoggedOut } from '../../auth/auth.actions';

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
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
          <span>&nbsp;My budget</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/categories' }}>
          <NavItem eventKey={1} href="#">
            Categories
          </NavItem>
        </LinkContainer>
        <LinkContainer to={{ pathname: '/transactions' }}>
          <NavItem eventKey={2} href="#">
            Transactions
          </NavItem>
        </LinkContainer>
      </Nav>
      {isUserLoggedIn
      && (
      <Nav pullRight>
        <NavItem>
          <LogoutButton onUserLoggedOut={onUserLoggedOut} />
        </NavItem>
      </Nav>
      )}
    </Navbar.Collapse>
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
