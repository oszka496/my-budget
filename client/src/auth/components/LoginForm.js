import React, { useState } from 'react';
import { Paper as MuiPaper, TextField, withStyles } from '@material-ui/core';
import { func } from 'prop-types';
import api from 'api';
import { Form } from '../../components/form';
import SubmitButton from '../../components/form/SubmitButton';

const paperStyles = {
  root: {
    width: '600px',
    margin: '60px auto',
  },
};

const Paper = withStyles(paperStyles)(MuiPaper);

const LoginForm = ({ onUserLoggedIn, onLoginFailed }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const authenticate = () => {
    const url = api.auth.login();
    const body = JSON.stringify(state);
    const { username } = state;

    api.requests
      .post(url, body)
      .then(({ token }) => {
        onUserLoggedIn(username, token);
      })
      .catch(() => {
        onLoginFailed('Incorrect username or password');
      });
  };

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  const { username, password } = state;

  return (
    <Paper>
      <Form onSubmit={authenticate}>
        <TextField
          autoFocus
          label="Username"
          name="username"
          value={username}
          type="text"
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          value={password}
          type="password"
          onChange={handleChange}
          required
        />
        <SubmitButton onClick={authenticate} color="primary">Log in</SubmitButton>
      </Form>
    </Paper>
  );
};

LoginForm.propTypes = {
  onUserLoggedIn: func.isRequired,
  onLoginFailed: func.isRequired,
};

export default LoginForm;
