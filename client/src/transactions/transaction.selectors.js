import { createSelector } from '@reduxjs/toolkit';
import Adapter from 'utils/adapter';
import { selectCategories, getActiveCategoryId } from 'categories/category.selectors';
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
const getTransactionsWithActiveCategory = createSelector(
  [selectTransactionsWithCategories, getActiveCategoryId],
  (transactions, activeCategory) => (
    activeCategory
      ? transactions.filter((transaction) => transaction.category === activeCategory)
      : transactions
  ),
);
export const getTransactionsByDate = createSelector(getTransactionsWithActiveCategory, groupByDate);

export const getTransactionFetchStatus = createSelector(
  getTransactionsState,
  ({ fetchStatus }) => fetchStatus,
);

export const getTransactionsListData = createSelector(
  [getTransactionFetchStatus, getTransactionsByDate],
  (fetchStatus, { dates, itemsByDate }) => ({
    dates,
    itemsByDate,
    loading: fetchStatus === ACTION_STATUS.IN_PROGRESS,
    error: fetchStatus === ACTION_STATUS.ERROR,
  }),
);
