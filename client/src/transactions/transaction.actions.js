import { createActionTypes } from 'utils/actions.utils';

export const TRANSACTIONS_FETCHED = 'TRANSACTIONS:FETCHED';
export const TRANSACTIONS_NEW = 'TRANSACTIONS:NEW';
export const TRANSACTIONS_DELETE = 'TRANSACTIONS:DELETE';
export const TRANSACTIONS_DELETED = 'TRANSACTIONS:DELETED';

export const FETCH_TRANSACTIONS = 'TRANSACTIONS:FETCH_START';

export const fetchTransactions = ({
  type: FETCH_TRANSACTIONS,
});

export const transactionsFetched = transactions => ({
  type: TRANSACTIONS_FETCHED,
  transactions,
});

export const transactionsDelete = id => ({
  type: TRANSACTIONS_DELETE,
  id,
});

export const transationDeleted = id => ({
  type: TRANSACTIONS_DELETED,
  id,
});

export const ADD_TRANSACTION = createActionTypes('TRANSACTIONS:CREATE');
export const addTransaction = transaction => ({ type: ADD_TRANSACTION.START, transaction });
export const addTransactionSuccess = transaction => ({ type: ADD_TRANSACTION.SUCCESS, transaction });
export const addTransactionError = transaction => ({ type: ADD_TRANSACTION.ERROR, transaction });
