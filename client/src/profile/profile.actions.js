export const PROFILE_FETCHED = 'PROFILE:FETCHED';
export const PROFILE_UPDATED = 'PROFILE:UPDATED';

export const profileFetched = profile => ({
  type: PROFILE_FETCHED,
  profile,
});

export const profileUpdated = profile => ({
  type: PROFILE_UPDATED,
  profile,
});
