export const TRANSACTIONS_FETCHED = 'TRANSACTIONS:FETCHED';

export const transactionsFetched = transactions => ({
  type: TRANSACTIONS_FETCHED,
  transactions,
});
