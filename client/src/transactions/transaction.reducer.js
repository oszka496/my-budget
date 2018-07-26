import * as actions from './transaction.actions';
import Adapter from '../utils/adapter';

const adapter = new Adapter();
const initialTransactionsState = adapter.getInitialState();

export const transactionReducer = (state = initialTransactionsState, action) => {
  switch (action.type) {
    case actions.TRANSACTIONS_FETCHED: {
      return { ...adapter.addMany(state, action.transactions), isLoaded: true };
    }
    default:
      return state;
  }
};
