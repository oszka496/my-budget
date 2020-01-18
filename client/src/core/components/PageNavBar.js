import React from 'react';
import { func } from 'prop-types';
import { Button } from '@material-ui/core';
import { RoutedSettingsButton } from './SettingsButton';

const PageNavBar = ({ signOff }) => (
  <>
    <RoutedSettingsButton />
    <Button color="inherit" onClick={signOff}>Log out</Button>
  </>
);

PageNavBar.propTypes = {
  signOff: func.isRequired,
};

export default PageNavBar;
