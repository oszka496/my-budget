import React, { useState } from 'react';
import { Button, Paper, TextField, makeStyles } from '@material-ui/core';
import { func } from 'prop-types';
import api from 'api';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    padding: '16px',
  },
  button: {
    alignSelf: 'flex-end',
  },
  input: {
    marginBottom: '8px',
  },
});

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
  const classes = useStyles();

  return (
    <Paper className={classes.container}>
      <TextField
        label="Username"
        name="username"
        value={username}
        type="text"
        onChange={handleChange}
        required
        className={classes.input}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
        onChange={handleChange}
        required
        className={classes.input}
      />
      <Button onClick={authenticate} className={classes.button}>Log in</Button>
    </Paper>
  );
};

LoginForm.propTypes = {
  onUserLoggedIn: func.isRequired,
  onLoginFailed: func.isRequired,
};

export default LoginForm;
