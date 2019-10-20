import React from 'react';
import { string, bool, number } from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { TransactionActions } from './TransactionActions';

const displayAmount = ({ amount, isIncome, currency }) => `${isIncome ? '+' : '-'}${amount} ${currency}`;

const TransactionItem = ({ id, title, categoryName, amount, isIncome, currency }) => (
  <ListItem>
    <TransactionActions id={id} />
    <ListItemText primary={title} secondary={categoryName} />
    <ListItemSecondaryAction>
      <ListItemText primary={displayAmount({ amount, isIncome, currency })} />
    </ListItemSecondaryAction>
  </ListItem>
);

TransactionItem.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  categoryName: string,
  amount: string.isRequired,
  currency: string.isRequired,
  isIncome: bool.isRequired,
};

export default TransactionItem;
