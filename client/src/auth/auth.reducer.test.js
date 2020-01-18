import * as actions from './auth.actions';
import { authReducer } from './auth.reducer';

describe('Authentication reducer', () => {
  const username = 'username';
  const token = '12345';

  it('should handle LOGIN', () => {
    const stateBefore = {
      id: 1,
    };
    const action = actions.authenticateSuccess({ username, token });
    const stateAfter = authReducer(stateBefore, action);
    expect(stateAfter).toEqual({ id: 1, username, token });
  });
});
