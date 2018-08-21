import React from 'react';
import { func, number, string } from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const msgColor = {
  error: 'danger',
  info: 'info',
  success: 'success',
};

const MessageItem = ({ type, message, id, onDismiss }) => (
  <ListGroupItem bsStyle={msgColor[type]} onClick={() => onDismiss(id)}>{message}</ListGroupItem>
);

MessageItem.propTypes = {
  onDismiss: func.isRequired,
  id: number.isRequired,
  type: string.isRequired,
  message: string.isRequired,
};

export default MessageItem;
