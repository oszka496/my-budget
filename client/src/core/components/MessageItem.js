import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { func, number, string } from 'prop-types';

const useStyles = makeStyles({
  root: {
    padding: '8px',
    background: '#e57373', // TODO: use palette
  },
});

const MessageItem = ({ message, id, onDismiss }) => {
  const classes = useStyles();
  return (
    <Typography className={classes.root} onClick={() => onDismiss(id)}>{message}</Typography>
  );
};

MessageItem.propTypes = {
  onDismiss: func.isRequired,
  id: number.isRequired,
  message: string.isRequired,
};

export default MessageItem;
