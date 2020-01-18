import * as actions from './auth.actions';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.LOGIN.SUCCESS: {
      return { ...state, username: action.username, token: action.token };
    }
    default:
      return state;
  }
};
