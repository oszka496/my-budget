export const TRANSACTIONS_FETCHED = 'TRANSACTIONS:FETCHED';
export const TRANSACTIONS_NEW = 'TRANSACTIONS:NEW';
export const TRANSACTIONS_DELETE = 'TRANSACTIONS:DELETE';

export const transactionsFetched = transactions => ({
  type: TRANSACTIONS_FETCHED,
  transactions,
});

export const transactionsNew = transaction => ({
  type: TRANSACTIONS_NEW,
  transaction,
});

export const transactionsDelete = id => ({
  type: TRANSACTIONS_DELETE,
  id,
});
