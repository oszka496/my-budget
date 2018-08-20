import React, { Component } from 'react';
import { Button, Form, Panel } from 'react-bootstrap';
import { func } from 'prop-types';
import LabeledInput from '../../shared/LabeledInput';
import api from '../../api';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  authenticate = () => {
    const url = api.auth.login();
    const body = JSON.stringify(this.state);
    const { username } = this.state;
    const { onUserLoggedIn } = this.props;

    api.requests
      .post(url, body)
      .then(({ token }) => {
        localStorage.setItem('token', token);
        onUserLoggedIn(username, token);
      });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Panel>
        <Panel.Body>
          <Form>
            <LabeledInput label="Username" value={username} type="text" onChange={this.handleChange} required />
            <LabeledInput label="Password" value={password} type="password" onChange={this.handleChange} required />
            <Button onClick={this.authenticate}>Log in</Button>
          </Form>
        </Panel.Body>
      </Panel>
    );
  }
}

LoginForm.propTypes = {
  onUserLoggedIn: func.isRequired,
};

export default LoginForm;
