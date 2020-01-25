import React, { useEffect } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../transaction.actions';
import { selectTransactionsWithCategories } from '../transaction.selectors';
import TransactionItem from './TransactionItem';
import { TransactionListSubheader } from './TransactionListSubheader';

const groupByDate = (items) => {
  const dates = new Set(items.map(({ date }) => date));
  const itemsByDate = items.reduce((prev, curr) => {
    const { date } = curr;
    const arr = prev[date] || [];
    return { ...prev, [date]: [...arr, curr] };
  },
  {});
  return { dates, itemsByDate };
};

export const NewTransactionList = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchTransactions); }, [dispatch]);

  const items = useSelector(state => selectTransactionsWithCategories(state));
  const { dates, itemsByDate } = groupByDate(items);

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
