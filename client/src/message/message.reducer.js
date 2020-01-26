import Adapter from '../utils/adapter';
import * as actions from './message.actions';

const adapter = new Adapter();
const initialMessagesState = adapter.getInitialState();

export const messageReducer = (state = initialMessagesState, action) => {
  switch (action.type) {
    case actions.RAISE_ERROR: {
      return adapter.addOne(state, action.payload);
    }
    case actions.DISMISS_MESSAGE: {
      return adapter.deleteOne(state, action.id);
    }
    default:
      return state;
  }
};
