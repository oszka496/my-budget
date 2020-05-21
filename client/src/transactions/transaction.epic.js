import { combineEpics, ofType } from 'redux-observable';
import { from, of, merge } from 'rxjs';
import { switchMap, mergeMap, map, catchError, mapTo, withLatestFrom } from 'rxjs/operators';
import { categoryActions } from 'categories/category.slice';
import { getActiveCategoryId } from 'categories/category.selectors';
import { raiseError } from '../message/message.actions';
import { transactionActions as actions } from './transaction.slice';
import * as api from './transaction.api';

export const transactionsFetchEpic = (actions$, state$) => {
  const activeCategory$ = state$.pipe(map(getActiveCategoryId));

  return actions$.pipe(
    ofType(actions.fetchStart.type, categoryActions.categorySelected.type),
    withLatestFrom(activeCategory$),
    switchMap(
      ([, categoryId]) => from(api.fetchTransactions({ categoryId })),
    ),
    map(actions.fetchSuccess),
    catchError(
      (_, caught) => merge(
        of(
          actions.fetchError(),
          raiseError('An error occurred when trying to fetch transactions'),
        ),
        caught,
      ),
    ),
  );
};

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

const updateRequest = ({ payload }) => from(api.editTransaction(payload)).pipe(
  map(() => actions.editSuccess(payload)),
  catchError(({ message }) => of(
    actions.editError({ id: payload.id, error: message }),
    raiseError('Failed to edit transaction'),
  )),
);

export const transactionEditEpic = (actions$) => actions$.pipe(
  ofType(actions.editStart.type),
  switchMap(updateRequest),
);

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
  transactionEditEpic,
);
