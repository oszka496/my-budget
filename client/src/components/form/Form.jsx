import React from 'react';
import { makeStyles } from '@material-ui/core';
import { func } from 'prop-types';

const useStyles = makeStyles({
  form: {
    'display': 'flex',
    'flexDirection': 'column',
    'minWidth': '400px',
    'maxWidth': '600px',
    'padding': '0 16px 16px',
    '&>div:not(:first-child)': {
      marginTop: '8px',
    },
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
