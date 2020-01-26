import React from 'react';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';
import { coreRoutes } from 'core/core.routes';
import { createRedirect } from './Router';


export const SettingsButton = ({ history }) => (
  <IconButton onClick={createRedirect(history, coreRoutes.profile.href)}>
    <SettingsIcon />
  </IconButton>
);

SettingsButton.propTypes = {
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export const RoutedSettingsButton = withRouter(SettingsButton);
