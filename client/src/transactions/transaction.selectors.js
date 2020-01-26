import { createSelector } from '@reduxjs/toolkit';
import Adapter from 'utils/adapter';
import { selectCategories } from 'categories/category.selectors';

const adapter = new Adapter();

const selectors = adapter.getSelectors('transactions');

export const selectTransactionsAll = selectors.selectItemsList;
export const selectTransactionsWithCategories = createSelector(
  [selectTransactionsAll, selectCategories],
  (transactions, categories) => transactions.map(
    transaction => ({ ...transaction, categoryName: transaction.category && categories[transaction.category].name }),
  ),
);
