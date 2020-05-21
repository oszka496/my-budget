import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { TransactionListSubheader } from './TransactionListSubheader';
import TransactionItem from './TransactionItem';
import TransactionModel from '../transaction.model';

export function TransactionEntries({ sortedDates, itemsByDate, showCategory }) {
  return (
    <List disablePadding>
      {sortedDates.map(date => (
        <List
          key={date}
          dense
          subheader={<TransactionListSubheader title={date} />}
        >
          {itemsByDate[date].map(item => (
            <TransactionItem
              key={item.id}
              transaction={item}
              showCategory={showCategory}
            />
          ))}
        </List>
      ))}
    </List>
  );
}

TransactionEntries.propTypes = {
  sortedDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  itemsByDate: PropTypes.objectOf(
    PropTypes.arrayOf(TransactionModel),
  ).isRequired,
  showCategory: PropTypes.bool.isRequired,
};
