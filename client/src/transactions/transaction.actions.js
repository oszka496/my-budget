export const TRANSACTIONS_FETCHED = 'TRANSACTIONS:FETCHED';

export const transactionsFetched = transactions => ({
  type: TRANSACTIONS_FETCHED,
  transactions,
});

export const TRANSACTIONS_NEW = 'TRANSACTIONS:NEW';

export const transactionsNew = transaction => ({
  type: TRANSACTIONS_NEW,
  transaction,
});
