import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
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

    api.requests
      .post(url, body)
      .then(
        ({ token }) => { localStorage.setItem('token', token); },
        console.log,
      );
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <Form horizontal>
        <LabeledInput label="Username" value={username} type="text" onChange={this.handleChange} required />
        <LabeledInput label="Password" value={password} type="password" onChange={this.handleChange} required />
        <Button onClick={this.authenticate}>Log in</Button>
      </Form>
    );
  }
}

export default LoginForm;
