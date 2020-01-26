import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, mergeMap, map, catchError, mapTo } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import * as actions from './transaction.actions';
import * as api from './transaction.api';

export const transactionsFetchEpic = (actions$) => actions$.pipe(
  ofType(actions.FETCH_TRANSACTIONS),
  switchMap(() => from(api.fetchTransactions())),
  map(actions.transactionsFetched),
  catchError(() => of(raiseError('Failed to fetch data'))),
);

export const addTransactionEpic = (actions$) => {
  const mapFetchToRequest = ({ transaction }) => from(api.createTransaction(transaction)).pipe(
    map(() => actions.addTransactionSuccess(transaction)),
    catchError(() => of(
      actions.addTransactionError(transaction),
      raiseError('Failed to add transaction'),
    )),
  );

  return actions$.pipe(
    ofType(actions.ADD_TRANSACTION.START),
    mergeMap(mapFetchToRequest),
  );
};

export const transactionDeleteEpic = (actions$) => actions$.pipe(
  ofType(actions.TRANSACTIONS_DELETE),
  mergeMap(({ id }) => from(api.deleteTransaction(id)).pipe(
    mapTo(actions.transationDeleted(id)),
  )),
  catchError(() => of(raiseError('Failed to delete item'))),
);

export const transactionsEpic = combineEpics(
  addTransactionEpic,
  transactionsFetchEpic,
  transactionDeleteEpic,
);
