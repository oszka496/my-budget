import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon, Label, ListGroupItem } from 'react-bootstrap';

const formatDate = dateString => {
  const [, month, day] = new Date(dateString).toDateString().split(' ');
  return `${day} ${month}`;
};

const TransactionItem = ({ id, title, amount, date, isIncome, categoryName, deleteTransaction }) => (
  <ListGroupItem className="transaction-item">
    <div className="left-panel">{formatDate(date)}</div>
    <div>{title}</div>
    <div className="right">{`${isIncome ? '+' : '-'}${amount}`}</div>
    <div><Label bsStyle="info">{categoryName}</Label></div>
    <div className="right">
      <Button bsStyle="link" bsSize="xsmall" onClick={() => { deleteTransaction(id); }}>
        <Glyphicon glyph="trash" />
      </Button>
    </div>
  </ListGroupItem>
);

TransactionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  categoryName: PropTypes.string,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
  deleteTransaction: PropTypes.func.isRequired,
};

export default TransactionItem;
