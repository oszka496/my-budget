import React from 'react';
import { string, bool } from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

const displayAmount = ({ amount, isIncome, currency }) => `${isIncome ? '+' : '-'}${amount} ${currency}`;

const TransactionItem = ({ title, categoryName, amount, isIncome, currency }) => (
  <ListItem>
    <ListItemText primary={title} secondary={categoryName} />
    <ListItemSecondaryAction>
      <ListItemText primary={displayAmount({ amount, isIncome, currency })} />
    </ListItemSecondaryAction>
  </ListItem>
);

TransactionItem.propTypes = {
  title: string.isRequired,
  categoryName: string,
  amount: string.isRequired,
  currency: string.isRequired,
  isIncome: bool.isRequired,
};

export default TransactionItem;
