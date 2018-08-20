import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import LogoutButton from '../../auth/components/LogoutButton';
import { selectUserLoggedIn } from '../../auth/auth.selectors';

const mapStateToProps = (state) => ({
  isUserLoggedIn: selectUserLoggedIn(state),
});

const Header = (props) => {
  const { isUserLoggedIn } = props;
  return (
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
        <Nav pullRight>
          <NavItem>
            {isUserLoggedIn && <LogoutButton />}
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

Header.propTypes = {
  isUserLoggedIn: bool.isRequired,
};

export default connect(
  mapStateToProps,
  null,
)(Header);
