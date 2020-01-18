import { initialTransactionsState } from 'transactions/transaction.reducer';
import { metaReducer } from './root.reducer';
import * as actions from '../auth/auth.actions';
import Adapter from '../utils/adapter';

const adapter = new Adapter();

describe('Root reducer', () => {
  it('should handle USER_LOGGED_OUT', () => {
    const stateBefore = {
      auth: {
        token: 12345,
      },
      categories: {
        ids: [1, 2],
        entities: { 1: { id: 1 }, 2: { id: 2 } },
        isLoaded: true,
      },
    };
    const stateAfter = metaReducer(stateBefore, { type: actions.LOGOUT });
    const initialState = adapter.getInitialState();
    expect(stateAfter.auth).toEqual({});
    expect(stateAfter.categories).toEqual(initialState);
    expect(stateAfter.transactions).toEqual(initialTransactionsState);
  });
});
