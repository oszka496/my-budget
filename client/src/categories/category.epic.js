import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import { fetchCategoriesError, fetchCategoriesSuccess } from './category.actions';
import * as ACTION_TYPES from './category.types';
import * as api from './category.api';

export const fetchCategoriesEpic = actions$ => actions$.pipe(
  ofType(ACTION_TYPES.FETCH_CATEGORIES.START),
  switchMap(() => from(api.fetchCategories())),
  map(fetchCategoriesSuccess),
  catchError(() => of(
    fetchCategoriesError(),
    raiseError('Failed to get categories'),
  )),
);

export const categoriesEpic = combineEpics(fetchCategoriesEpic);
