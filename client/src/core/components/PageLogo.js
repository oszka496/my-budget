import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../logo.svg';

const PageLogo = () => (
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">
        <img src={logo} className="App-logo" alt="logo" />
        <span>&nbsp;My budget</span>
      </Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
);

export default PageLogo;
