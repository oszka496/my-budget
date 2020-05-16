import React, { useEffect } from 'react';
import { List } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { transactionActions as actions } from '../transaction.slice';
import { getTransactionsByDate } from '../transaction.selectors';
import TransactionItem from './TransactionItem';
import { TransactionListSubheader } from './TransactionListSubheader';
import { useURLSearchParams } from '../../utils/router.utils';

export const NewTransactionList = () => {
  const query = useURLSearchParams();
  const categoryId = query.get('category');

  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(actions.fetchStart(categoryId));
    }, [dispatch, categoryId],
  );

  const { dates, itemsByDate } = useSelector(state => getTransactionsByDate(state));

  return (
    <List disablePadding>
      { Array.from(dates).sort().reverse().map(date => (
        <List
          key={date}
          dense
          subheader={<TransactionListSubheader title={date} />}
        >
          {itemsByDate[date].map(item => <TransactionItem key={item.id} transaction={item} />)}
        </List>
      )) }
    </List>
  );
};

export default NewTransactionList;
