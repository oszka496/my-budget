import React from 'react';
import { makeStyles } from '@material-ui/core';
import { func } from 'prop-types';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    padding: '16px',
  },
});

const Form = ({ onSubmit, ...props }) => {
  const classes = useStyles();
  const handleSubmit = (ev) => {
    ev.preventDefault();
    onSubmit(ev);
  };
  return <form onSubmit={handleSubmit} className={classes.form} {...props} />;
};
Form.propTypes = {
  onSubmit: func.isRequired,
};

export default Form;
