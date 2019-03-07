import { Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import React from 'react';
import { func, object } from 'prop-types';
import { LogoutButton } from 'auth/components';
import { withRouter } from 'react-router-dom';


const LogoutWrapper = ({ onUserLoggedOut, history }) => (
  <Nav pullRight>
    <NavItem>
      <Button bsStyle="link" bsSize="xsmall" onClick={() => { history.push('/profile'); }}>
        <Glyphicon glyph="cog" />
      </Button>
      <LogoutButton onUserLoggedOut={onUserLoggedOut} />
    </NavItem>
  </Nav>
);

LogoutWrapper.propTypes = {
  history: object.isRequired, // eslint-disable-line react/forbid-prop-types
  onUserLoggedOut: func.isRequired,
};

export default withRouter(LogoutWrapper);
