import React from 'react';
import { Button } from '@material-ui/core';
import { func } from 'prop-types';

const LogoutButton = ({ onUserLoggedOut }) => (
  <Button onClick={onUserLoggedOut}>Log out</Button>
);

LogoutButton.propTypes = {
  onUserLoggedOut: func.isRequired,
};

export default LogoutButton;
