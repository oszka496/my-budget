import * as actions from './auth.actions';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGGED_IN: {
      return { ...state, username: action.username, token: action.token };
    }
    case actions.USER_LOGGED_OUT: {
      return {};
    }
    default:
      return state;
  }
};