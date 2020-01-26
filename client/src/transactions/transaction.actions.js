import { createActionTypes } from 'utils/actions.utils';

export const FETCH_TRANSACTIONS = 'transactions/fetchStart';
export const TRANSACTIONS_FETCHED = 'transactions/fetchSuccess';
export const TRANSACTIONS_DELETE = 'transactions/deleteStart';
export const TRANSACTIONS_DELETED = 'transactions/deleteSuccess';

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

export const ADD_TRANSACTION = createActionTypes('transactions/create');
export const addTransaction = transaction => ({ type: ADD_TRANSACTION.START, transaction });
export const addTransactionSuccess = transaction => ({ type: ADD_TRANSACTION.SUCCESS, transaction });
export const addTransactionError = transaction => ({ type: ADD_TRANSACTION.ERROR, transaction });
