import React from 'react';
import { List } from '@material-ui/core';
import { connect } from 'react-redux';
import { arrayOf, func, shape, string } from 'prop-types';
import { selectMessages } from '../message.selectors';
import { dismissMessage } from '../message.actions';
import MessageItem from './MessageItem';

const mapStateToProps = (state) => ({
  items: selectMessages(state),
});

const mapDispatchToProps = { onDismiss: dismissMessage };

const MessageListBody = ({ items, onDismiss }) => (
  <List disablePadding>
    { items.map(item => <MessageItem onDismiss={onDismiss} key={item.id} {...item} />) }
  </List>
);
MessageListBody.propTypes = {
  items: arrayOf(
    shape({
      id: string,
      message: string,
    }),
  ).isRequired,
  onDismiss: func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageListBody);
