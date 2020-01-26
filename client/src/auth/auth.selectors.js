import { createSelector } from '@reduxjs/toolkit';

export const selectUser = state => state.auth;
export const selectUserLoggedIn = createSelector(selectUser, user => !!user.token);
