import * as actions from './auth.actions';
import { authReducer } from './auth.reducer';

describe('Authentication reducer', () => {
  it('should handle USER_LOGGED_OUT', () => {
    const stateBefore = {
      id: 2,
      token: 12345,
    };
    const stateAfter = authReducer(stateBefore, { type: actions.USER_LOGGED_OUT });
    expect(stateAfter).toEqual({});
  });
  it('should handle USER_LOGGED_IN', () => {
    const stateBefore = {
      id: 1,
    };
    const action = {
      type: actions.USER_LOGGED_IN,
      username: 'username',
      token: 12345,
    };
    const stateAfter = authReducer(stateBefore, action);
    expect(stateAfter).toEqual({
      id: 1,
      username: 'username',
      token: 12345,
    });
  });
});
