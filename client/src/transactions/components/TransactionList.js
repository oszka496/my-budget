import React from 'react';
import { List, Typography, makeStyles, LinearProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getActiveCategory } from 'categories/category.selectors';
import { getTransactionsByDate, getTransactionsLoading } from '../transaction.selectors';
import TransactionItem from './TransactionItem';
import { TransactionListSubheader } from './TransactionListSubheader';

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

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {category.name}
      </Typography>
      { loading
        ? <LinearProgress className={classes.loading} />
        : (
          <List disablePadding>
            { Array.from(dates).sort().reverse().map(date => (
              <List
                key={date}
                dense
                subheader={<TransactionListSubheader title={date} />}
              >
                {itemsByDate[date].map(item => (
                  <TransactionItem
                    key={item.id}
                    transaction={item}
                    showCategory={!category.id}
                  />
                ))}
              </List>
            )) }
          </List>
        )}
    </div>
  );
}

export default TransactionList;
