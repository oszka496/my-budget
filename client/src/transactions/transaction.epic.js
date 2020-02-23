import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, mergeMap, map, catchError, mapTo } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import { transactionActions as actions } from './transaction.slice';
import * as api from './transaction.api';

export const transactionsFetchEpic = (actions$) => actions$.pipe(
  ofType(actions.fetchStart.type),
  switchMap(() => from(api.fetchTransactions())),
  map(actions.fetchSuccess),
  catchError(() => of(
    actions.fetchError(),
    raiseError('Failed to fetch data'),
  )),
);

export const addTransactionEpic = (actions$) => {
  const mapFetchToRequest = ({ payload }) => from(api.createTransaction(payload)).pipe(
    map(() => actions.createSuccess(payload)),
    catchError(() => of(
      actions.createError(payload),
      raiseError('Failed to add transaction'),
    )),
  );

  return actions$.pipe(
    ofType(actions.createStart.type),
    mergeMap(mapFetchToRequest),
  );
};

export const transactionDeleteEpic = (actions$) => actions$.pipe(
  ofType(actions.deleteStart.type),
  mergeMap(({ payload: id }) => from(api.deleteTransaction(id)).pipe(
    mapTo(actions.deleteSuccess(id)),
  )),
  catchError(() => of(raiseError('Failed to delete item'))),
);

export const transactionsEpic = combineEpics(
  addTransactionEpic,
  transactionsFetchEpic,
  transactionDeleteEpic,
);
