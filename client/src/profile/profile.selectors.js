import { createSelector } from '@reduxjs/toolkit';

export const getProfileState = state => state.profile;
export const getProfileData = createSelector(
  getProfileState,
  ({ data }) => data,
);

export const getDefaultCurrency = createSelector(getProfileData, ({ currency }) => currency);
export const getProfileFetchStatus = createSelector(getProfileState, ({ fetchStatus }) => fetchStatus);
