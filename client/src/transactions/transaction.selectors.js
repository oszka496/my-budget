import { createSelector } from '@reduxjs/toolkit';
import Adapter from 'utils/adapter';
import { selectCategories } from 'categories/category.selectors';
import { ACTION_STATUS } from 'utils/actions.utils';
import { groupByDate } from '../utils/datetime.utils';

const adapter = new Adapter();

const selectors = adapter.getSelectors('transactions');

const getTransactionsState = selectors.selectItems;
export const selectTransactionsAll = selectors.selectItemsList;

export const selectTransactionsWithCategories = createSelector(
  [selectTransactionsAll, selectCategories],
  (transactions, categories) => transactions.map(
    transaction => ({ ...transaction, categoryName: transaction.category && categories[transaction.category].name }),
  ),
);

export const getTransactionsByDate = createSelector(selectTransactionsWithCategories, groupByDate);

export const getTransactionsLoading = createSelector(
  getTransactionsState,
  ({ fetchStatus }) => fetchStatus === ACTION_STATUS.IN_PROGRESS,
);
