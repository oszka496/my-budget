import { createSelector } from 'reselect';

export const selectProfile = state => state.profile;
export const selectProfileIsLoaded = createSelector(
  selectProfile, profile => profile.isLoaded,
);
export const selectProfileDetails = createSelector(
  selectProfile,
  profile => {
    const { isLoaded, ...profileDetails } = profile;
    return profileDetails;
  },
);
