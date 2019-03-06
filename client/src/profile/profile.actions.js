export const PROFILE_FETCHED = 'PROFILE:FETCHED';

export const profileFetched = profile => ({
  type: PROFILE_FETCHED,
  profile,
});
