import { ACTION_STATUS } from 'utils/actions.utils';
import { PROFILE_UPDATED } from './profile.actions';
import { FETCH_PROFILE } from './profile.types';

const initialState = {
  data: {},
  fetchStatus: ACTION_STATUS.NOT_STARTED,
  isLoaded: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE.START: {
      return { ...state, fetchStatus: ACTION_STATUS.IN_PROGRESS };
    }
    case PROFILE_UPDATED:
    case FETCH_PROFILE.SUCCESS: {
      return { ...state, fetchStatus: ACTION_STATUS.SUCCESS, data: action.profile };
    }
    case FETCH_PROFILE.ERROR: {
      return { ...state, fetchStatus: ACTION_STATUS.ERROR };
    }
    default:
      return state;
  }
};
