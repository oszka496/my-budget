import { createSelector } from 'reselect';

export const selectUser = state => state.auth;
export const selectUserLoggedIn = createSelector(selectUser, user => !!user.token);
