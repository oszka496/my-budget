import { ACTION_STATUS } from 'utils/actions.utils';
import { FETCH_PROFILE, UPDATE_PROFILE } from './profile.types';

const initialState = {
  data: {},
  fetchStatus: ACTION_STATUS.NOT_STARTED,
  updateStatus: ACTION_STATUS.NOT_STARTED,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE.START: {
      return { ...state, fetchStatus: ACTION_STATUS.IN_PROGRESS };
    }
    case FETCH_PROFILE.SUCCESS: {
      return { ...state, fetchStatus: ACTION_STATUS.SUCCESS, data: action.profile };
    }
    case FETCH_PROFILE.ERROR: {
      return { ...state, fetchStatus: ACTION_STATUS.ERROR };
    }
    case UPDATE_PROFILE.START: {
      return { ...state, updateStatus: ACTION_STATUS.IN_PROGRESS };
    }
    case UPDATE_PROFILE.SUCCESS: {
      const data = { ...state.data, ...action.profile };
      return { ...state, updateStatus: ACTION_STATUS.SUCCESS, data };
    }
    case UPDATE_PROFILE.ERROR: {
      return { ...state, updateStatus: ACTION_STATUS.ERROR };
    }
    default:
      return state;
  }
};
