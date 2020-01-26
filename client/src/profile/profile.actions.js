import { FETCH_PROFILE } from './profile.types';

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
