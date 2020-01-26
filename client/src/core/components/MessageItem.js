import React from 'react';
import { func, string } from 'prop-types';
import { Alert } from '@material-ui/lab';

const MessageItem = ({ message, id, onDismiss }) => (
  <Alert severity="error" onClick={() => onDismiss(id)}>{message}</Alert>
);

MessageItem.propTypes = {
  onDismiss: func.isRequired,
  id: string.isRequired,
  message: string.isRequired,
};

export default MessageItem;
