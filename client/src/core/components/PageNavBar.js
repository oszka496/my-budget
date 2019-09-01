import React from 'react';
import { func } from 'prop-types';
import { Button } from '@material-ui/core';
import { RoutedSettingsButton } from './SettingsButton';

const PageNavBar = ({ onUserLoggedOut }) => (
  <>
    <RoutedSettingsButton />
    <Button color="inherit" onClick={onUserLoggedOut}>Log out</Button>
  </>
);

PageNavBar.propTypes = {
  onUserLoggedOut: func.isRequired,
};

export default PageNavBar;
