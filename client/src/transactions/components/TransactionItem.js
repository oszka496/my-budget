import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const TransactionItem = ({ title, amount, isIncome, categoryName }) => (
  <ListGroupItem className="transaction-item">
    <div>{title}</div>
    <div style={{ justifySelf: 'end' }}>{`${isIncome ? '+' : '-'}${amount}`}</div>
    <div>{categoryName && `category: ${categoryName}`}</div>
  </ListGroupItem>
);

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
  categoryName: PropTypes.string,
  amount: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
};

export default TransactionItem;
