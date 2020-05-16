import React, { useEffect } from 'react';
import { List, Typography, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useCategoryFromUrl } from 'utils/router.utils';
import { getCategoryById } from 'categories/category.selectors';
import { transactionActions as actions } from '../transaction.slice';
import { getTransactionsByDate } from '../transaction.selectors';
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
  return useSelector(state => getTransactionsByDate(state));
}

export function TransactionList() {
  const categoryId = useCategoryFromUrl();
  const category = useSelector(
    state => getCategoryById(state, { id: categoryId }),
  ) || {};

  const classes = useStyles();
  const { dates, itemsByDate } = useTransactionsByCategory(categoryId);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {category.name || 'All transactions'}
      </Typography>
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
    </div>
  );
}

export default TransactionList;
