import * as actions from './auth.actions';

const initialUserState = {};

export const authReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actions.USER_LOGGED_IN: {
      return { ...state, username: action.username, token: action.token };
    }
    default:
      return state;
  }
};
