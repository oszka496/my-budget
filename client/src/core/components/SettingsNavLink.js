import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

import { RoutedSettingsButton } from 'core/components';
import { routes } from 'core/components/Routes';


const SettingsNavLink = () => (
  <>
    <LinkContainer to={{ pathname: routes.profile.href }}>
      <NavItem href="#" className="sm-hide">
        {routes.profile.label}
      </NavItem>
    </LinkContainer>
    <NavItem href="#" className="xs-hide" id="settings-icon">
      <RoutedSettingsButton />
    </NavItem>
  </>
);

export default SettingsNavLink;
