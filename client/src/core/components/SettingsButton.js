import React from 'react';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import { createRedirect, routes } from './Routes';


export const SettingsButton = ({ history }) => (
  <IconButton onClick={createRedirect(history, routes.profile.href)}>
    <SettingsIcon />
  </IconButton>
);

SettingsButton.propTypes = {
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export const RoutedSettingsButton = withRouter(SettingsButton);
