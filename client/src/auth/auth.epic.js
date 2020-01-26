import { EMPTY, from, of } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map, catchError, tap, mergeMapTo } from 'rxjs/operators';
import { raiseError } from '../message/message.actions';
import { authenticateSuccess, LOGIN, LOGOUT } from './auth.actions';
import * as api from './auth.api';

const makeLoginRequest = ({ username, password }) => from(api.signIn({ username, password })).pipe(
  tap(({ token }) => localStorage.setItem('token', token)),
  map(({ token }) => authenticateSuccess({ token, username })),
  catchError(() => of(raiseError('Incorrect user or password'))),
);

export const loginEpic = (actions$) => actions$.pipe(
  ofType(LOGIN.START),
  switchMap(makeLoginRequest),
);

export const logoutEpic = (actions$) => actions$.pipe(
  ofType(LOGOUT),
  tap(() => localStorage.removeItem('token')),
  mergeMapTo(EMPTY),
);

export const authEpic = combineEpics(loginEpic, logoutEpic);
