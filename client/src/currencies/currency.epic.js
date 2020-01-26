import * as requests from 'api/requests';
import { currency } from 'api/urls';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { raiseError } from 'message/message.actions';
import { currencySlice } from './currency.reducer';

const { actions } = currencySlice;

const fetchCurrencyApi = () => requests.get(currency.list());

export const currencyEpic = (actions$) => actions$.pipe(
  ofType(actions.fetchCurrencies.toString()),
  switchMap(() => from(fetchCurrencyApi())),
  map(actions.currenciesFetched),
  catchError(() => of(raiseError('Failed to fetch data'))),
);
