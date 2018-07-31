import * as actions from './transaction.actions';
import Adapter from '../utils/adapter';

const adapter = new Adapter();
const initialTransactionsState = adapter.getInitialState();

export const transactionReducer = (state = initialTransactionsState, action) => {
  switch (action.type) {
    case actions.TRANSACTIONS_FETCHED: {
      return { ...adapter.addMany(state, action.transactions), isLoaded: true };
    }
    case actions.TRANSACTIONS_NEW: {
      return adapter.addOne(state, action.transaction);
    }
    case actions.TRANSACTIONS_DELETE: {
      return adapter.deleteOne(state, action.id);
    }
    default:
      return state;
  }
};
