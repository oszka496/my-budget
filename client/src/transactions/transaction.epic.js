import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import api from '../api';
import { raiseError } from '../core/message.actions';
// import { currencySlice } from './currency.reducer';
import * as actions from './transaction.actions';

const TRANSACTIONS_API = api.transaction.list();

export const transactionsEpic = (actions$) => actions$.pipe(
  ofType(actions.FETCH_TRANSACTIONS),
  switchMap(() => from(api.requests.get(TRANSACTIONS_API))),
  map(actions.transactionsFetched),
  catchError(() => of(raiseError('Failed to fetch data'))),
);
