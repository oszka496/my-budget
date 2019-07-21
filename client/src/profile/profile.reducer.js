import { PROFILE_FETCHED, PROFILE_UPDATED } from './profile.actions';

const initialState = {
  isLoaded: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_UPDATED:
    case PROFILE_FETCHED: {
      const { id, currency } = action.profile;
      return { isLoaded: true, id, currency };
    }
    default:
      return state;
  }
};
