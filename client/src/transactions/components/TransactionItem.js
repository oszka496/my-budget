import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const TransactionItem = ({ title }) => <ListGroupItem>{title}</ListGroupItem>;

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TransactionItem;
