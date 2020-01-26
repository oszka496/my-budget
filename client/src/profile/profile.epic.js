import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { raiseError } from '../core/message.actions';
import { fetchProfileError, fetchProfileSuccess } from './profile.actions';
import * as api from './profile.api';
import * as ACTION_TYPES from './profile.types';

export const fetchProfileEpic = actions$ => actions$.pipe(
  ofType(ACTION_TYPES.FETCH_PROFILE.START),
  switchMap(() => from(api.fetchProfile())),
  map(fetchProfileSuccess),
  catchError(() => of(
    fetchProfileError(),
    raiseError('Failed to get profile'),
  )),
);

export const profileEpic = combineEpics(fetchProfileEpic);
