import { FETCH_PROFILE, UPDATE_PROFILE } from './profile.types';

export const PROFILE_UPDATED = 'PROFILE:UPDATED';

export const profileUpdated = profile => ({
  type: PROFILE_UPDATED,
  profile,
});

export const fetchProfile = () => ({ type: FETCH_PROFILE.START });
export const fetchProfileSuccess = profile => ({
  type: FETCH_PROFILE.SUCCESS,
  profile,
});
export const fetchProfileError = () => ({ type: FETCH_PROFILE.ERROR });

export const updateProfile = profile => ({ type: UPDATE_PROFILE.START, profile });
export const updateProfileSuccess = profile => ({
  type: UPDATE_PROFILE.SUCCESS,
  profile,
});
export const updateProfileError = () => ({ type: UPDATE_PROFILE.ERROR });
