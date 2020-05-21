import React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { getActiveCategory } from 'categories/category.selectors';
import { getTransactionsByDate, getTransactionsLoading } from '../transaction.selectors';
import { NoTransactionsMessage } from './NoTransactionsMessage';
import { TransactionEntries } from './TransactionEntries';

const useStyles = makeStyles(
  theme => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(1, 4),
    },
    title: {
      marginBottom: theme.spacing(1),
    },
    loading: {
      margin: theme.spacing(2, 0),
    },
  }),
  { name: TransactionList.name },
);

function useTransactions() {
  const { dates, itemsByDate } = useSelector(state => getTransactionsByDate(state));
  const loading = useSelector(state => getTransactionsLoading(state));
  return { dates, itemsByDate, loading };
}

export function TransactionList() {
  const category = useSelector(getActiveCategory);

  const classes = useStyles();
  const { dates, itemsByDate, loading } = useTransactions();

  const sortedDates = Array.from(dates).sort().reverse();
  const loadedContent = sortedDates.length
    ? (
      <TransactionEntries
        sortedDates={sortedDates}
        itemsByDate={itemsByDate}
        showCategory={!category.id}
      />
    )
    : <NoTransactionsMessage />;

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {category.name}
      </Typography>
      { loading
        ? <LinearProgress className={classes.loading} />
        : loadedContent}
    </div>
  );
}

export default TransactionList;
