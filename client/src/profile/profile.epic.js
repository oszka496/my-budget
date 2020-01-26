import { combineEpics, ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import { fetchProfileError, fetchProfileSuccess, updateProfileError, updateProfileSuccess } from './profile.actions';
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

const updateRequest = ({ profile }) => from(api.updateProfile(profile)).pipe(
  map(() => updateProfileSuccess(profile)),
  catchError(() => of(
    updateProfileError(),
    raiseError('Failed to update profile'),
  )),
);

export const updateProfileEpic = actions$ => actions$.pipe(
  ofType(ACTION_TYPES.UPDATE_PROFILE.START),
  switchMap(updateRequest),
);

export const profileEpic = combineEpics(
  fetchProfileEpic,
  updateProfileEpic,
);
