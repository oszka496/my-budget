import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import { categoryActions } from './category.slice';
import * as api from './category.api';

export const fetchCategoriesEpic = actions$ => actions$.pipe(
  ofType(categoryActions.fetchStart.type),
  switchMap(() => from(api.fetchCategories())),
  map(categoryActions.fetchSuccess),
  catchError(() => of(
    categoryActions.fetchError(),
    raiseError('Failed to get categories'),
  )),
);

export const categoriesEpic = combineEpics(fetchCategoriesEpic);
