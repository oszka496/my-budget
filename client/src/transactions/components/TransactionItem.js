import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon, Label, ListGroupItem } from 'react-bootstrap';
import api from '../../api';

const deleteTransaction = (id, onItemDelete) => {
  const url = api.transaction.item(id);
  fetch(url, { method: 'DELETE' })
    .then(() => onItemDelete(id));
};

const formatDate = dateString => {
  const [, month, day] = new Date(dateString).toDateString().split(' ');
  return `${day} ${month}`;
};

const TransactionItem = ({ id, title, amount, date, isIncome, categoryName, onItemDelete }) => (
  <ListGroupItem className="transaction-item">
    <div className="left-panel">{formatDate(date)}</div>
    <div>{title}</div>
    <div className="right">{`${isIncome ? '+' : '-'}${amount}`}</div>
    <div> <Label bsStyle="info">{categoryName}</Label></div>
    <div className="right">
      <Button bsStyle="link" bsSize="xsmall" onClick={() => { deleteTransaction(id, onItemDelete); }}>
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
  onItemDelete: PropTypes.func.isRequired,
};

export default TransactionItem;
