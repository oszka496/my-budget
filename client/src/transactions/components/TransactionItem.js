import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const TransactionItem = ({ title, category, amount, isIncome }) => (
  <ListGroupItem className="transaction-item">
    <div>{title}</div>
    <div style={{ justifySelf: 'end' }}>{`${isIncome ? '+' : '-'}${amount}`}</div>
    <div>{category == null || `category: ${category}`}</div>
  </ListGroupItem>
);

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.number,
  amount: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
};

export default TransactionItem;
