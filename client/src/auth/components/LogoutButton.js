import React from 'react';
import { Button } from 'react-bootstrap';
import { func } from 'prop-types';

const LogoutButton = ({ onUserLoggedOut }) => (
  <Button onClick={onUserLoggedOut} className="btn-xs">Log out</Button>
);

LogoutButton.propTypes = {
  onUserLoggedOut: func.isRequired,
};

export default LogoutButton;
