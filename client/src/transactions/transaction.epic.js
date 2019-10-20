import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, mergeMap, map, catchError } from 'rxjs/operators';
import { raiseError } from '../core/message.actions';
import * as actions from './transaction.actions';
import * as api from './transaction.api';

export const transactionsFetchEpic = (actions$) => actions$.pipe(
  ofType(actions.FETCH_TRANSACTIONS),
  switchMap(() => from(api.fetchTransactions())),
  map(actions.transactionsFetched),
  catchError(() => of(raiseError('Failed to fetch data'))),
);

export const transactionDeleteEpic = (actions$) => actions$.pipe(
  ofType(actions.TRANSACTIONS_DELETE),
  mergeMap(({ id }) => from(api.deleteTransaction(id)),
    ({ id }) => actions.transationDeleted(id)),
  catchError(() => of(raiseError('Failed to delete item'))),
);

export const transactionsEpic = combineEpics(
  transactionsFetchEpic,
  transactionDeleteEpic,
);
