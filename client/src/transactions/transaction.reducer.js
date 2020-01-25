import * as actions from 'transactions/transaction.actions';
import Adapter from 'utils/adapter';
import { ACTION_STATUS } from 'utils/actions.utils';

const adapter = new Adapter();
export const initialTransactionsState = {
  ids: [],
  entities: {},
  isLoaded: false,
  createStatus: {},
};

const { IN_PROGRESS, ERROR, SUCCESS } = ACTION_STATUS;

export const transactionReducer = (state = initialTransactionsState, action) => {
  switch (action.type) {
    case actions.TRANSACTIONS_FETCHED: {
      return { ...adapter.addMany(state, action.transactions), isLoaded: true };
    }
    case actions.TRANSACTIONS_NEW: {
      return adapter.addOne(state, action.transaction);
    }
    case actions.TRANSACTIONS_DELETED: {
      return adapter.deleteOne(state, action.id);
    }
    case actions.ADD_TRANSACTION.START: {
      const { transaction } = action;
      const createStatus = { ...state.createStatus, [transaction.id]: IN_PROGRESS };
      return { ...adapter.addOne(state, transaction), createStatus };
    }
    case actions.ADD_TRANSACTION.SUCCESS: {
      const createStatus = { ...state.createStatus, [action.transaction.id]: SUCCESS };
      return { ...state, createStatus };
    }
    case actions.ADD_TRANSACTION.ERROR: {
      const { transaction: { id } } = action;
      const createStatus = { ...state.createStatus, [id]: ERROR };
      return { ...adapter.deleteOne(state, id), createStatus };
    }
    default:
      return state;
  }
};
