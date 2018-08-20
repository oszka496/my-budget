import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { func } from 'prop-types';
import { userLoggedOut } from '../auth.actions';

const mapDispatchToProps = (dispatch) => ({
  onUserLoggedOut: () => dispatch(userLoggedOut()),
});

class LogoutButton extends Component {
  logout = () => {
    const { onUserLoggedOut } = this.props;
    localStorage.removeItem('token');
    onUserLoggedOut();
  };

  render() {
    return <Button onClick={this.logout} className="btn-xs">Log out</Button>;
  }
}

LogoutButton.propTypes = {
  onUserLoggedOut: func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LogoutButton);
