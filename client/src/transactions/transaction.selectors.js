import { createSelector } from 'reselect';

export const selectTransactions = state => state.transactions;
export const selectTransactionsIds = createSelector(
  selectTransactions,
  transactions => transactions.ids
);
export const selectTransactionsEntities = createSelector(
  selectTransactions,
  transactions => transactions.entities
);
export const selectTransactionsAll = createSelector(
  [selectTransactionsIds, selectTransactionsEntities],
  (ids, entities) => ids.map(id => entities[id])
);
