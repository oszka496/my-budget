export const TRANSACTIONS_FETCHED = 'TRANSACTIONS:FETCHED';
export const TRANSACTIONS_NEW = 'TRANSACTIONS:NEW';
export const TRANSACTIONS_DELETE = 'TRANSACTIONS:DELETE';

export const FETCH_TRANSACTIONS = 'TRANSACTIONS:FETCH_START';

export const fetchTransactions = ({
  type: FETCH_TRANSACTIONS,
});

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
