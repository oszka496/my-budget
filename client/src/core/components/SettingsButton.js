import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Glyphicon } from 'react-bootstrap';
import { object } from 'prop-types';

import { createRedirect, routes } from './Routes';


export const SettingsButton = ({ history }) => (
  <Button className="btn-xs" onClick={createRedirect(history, routes.profile.href)}>
    <Glyphicon glyph="cog" id="settings-icon" />
  </Button>
);

SettingsButton.propTypes = {
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
};
export const RoutedSettingsButton = withRouter(SettingsButton);
