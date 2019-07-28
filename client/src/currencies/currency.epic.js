import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import api from '../api';
import { raiseError } from '../core/message.actions';
import { currencySlice } from './currency.reducer';

const { actions } = currencySlice;

const CURRENCY_API = api.currency.list();

export const currencyEpic = (actions$) => actions$.pipe(
  ofType(actions.fetchCurrencies.toString()),
  switchMap(() => from(api.requests.get(CURRENCY_API))),
  map(actions.currenciesFetched),
  catchError(() => of(raiseError('Failed to fetch data'))),
);