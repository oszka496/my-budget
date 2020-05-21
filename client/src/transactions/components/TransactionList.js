import React from 'react';
import { useSelector } from 'react-redux';
import { LinearProgress, makeStyles, Typography } from '@material-ui/core';
import { getActiveCategory } from 'categories/category.selectors';
import { getTransactionsListData } from '../transaction.selectors';
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

export function TransactionList() {
  const category = useSelector(getActiveCategory);

  const classes = useStyles();
  const { dates, itemsByDate, loading, error } = useSelector(getTransactionsListData);
  const sortedDates = Array.from(dates).sort().reverse();

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {category.name}
      </Typography>
      { loading && <LinearProgress className={classes.loading} /> }
      { !error && !loading && (
        sortedDates.length
          ? (
            <TransactionEntries
              sortedDates={sortedDates}
              itemsByDate={itemsByDate}
              showCategory={!category.id}
            />
          )
          : <NoTransactionsMessage />
      )}
    </div>
  );
}

export default TransactionList;
