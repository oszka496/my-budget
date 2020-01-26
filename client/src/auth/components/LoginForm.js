import React, { useState } from 'react';
import { Paper as MuiPaper, TextField, withStyles } from '@material-ui/core';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import { Form } from '../../components/form';
import SubmitButton from '../../components/form/SubmitButton';
import * as authActions from '../auth.actions';

const paperStyles = {
  root: {
    width: '600px',
    margin: '60px auto',
  },
};

const Paper = withStyles(paperStyles)(MuiPaper);

const LoginForm = ({ authenticate }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const login = () => authenticate(state);

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  const { username, password } = state;

  return (
    <Paper>
      <Form onSubmit={login}>
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
        <SubmitButton>Log in</SubmitButton>
      </Form>
    </Paper>
  );
};

LoginForm.propTypes = {
  authenticate: func.isRequired,
};

const mapDispatchToProps = { authenticate: authActions.authenticate };

export default connect(null, mapDispatchToProps)(LoginForm);
