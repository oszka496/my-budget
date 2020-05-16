import React, { useEffect } from 'react';
import { List, Typography, makeStyles, LinearProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useCategoryFromUrl } from 'utils/router.utils';
import { getCategoryById } from 'categories/category.selectors';
import { transactionActions as actions } from '../transaction.slice';
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

function useTransactionsByCategory(categoryId) {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(actions.fetchStart(categoryId));
    }, [dispatch, categoryId],
  );
  const { dates, itemsByDate } = useSelector(state => getTransactionsByDate(state));
  const loading = useSelector(state => getTransactionsLoading(state));
  return { dates, itemsByDate, loading };
}

export function TransactionList() {
  const categoryId = useCategoryFromUrl();
  const category = useSelector(
    state => getCategoryById(state, { id: categoryId }),
  ) || {};

  const classes = useStyles();
  const { dates, itemsByDate, loading } = useTransactionsByCategory(categoryId);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {category.name || 'All transactions'}
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
                    showCategory={!category.name}
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
