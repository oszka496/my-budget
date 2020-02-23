import React, { useEffect } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { transactionActions as actions } from '../transaction.slice';
import { getTransactionsByDate } from '../transaction.selectors';
import TransactionItem from './TransactionItem';
import { TransactionListSubheader } from './TransactionListSubheader';

export const NewTransactionList = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(actions.fetchStart()); }, [dispatch]);

  const { dates, itemsByDate } = useSelector(state => getTransactionsByDate(state));

  return (
    <List disablePadding>
      { Array.from(dates).sort().reverse().map(date => (
        <List
          key={date}
          dense
          subheader={<TransactionListSubheader title={date} />}
        >
          { itemsByDate[date].map(item => <TransactionItem key={item.id} {...item} />) }
        </List>
      )) }
    </List>
  );
};

export default NewTransactionList;
