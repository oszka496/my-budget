import * as actions from 'currencies/currency.actions';
import { adapter } from 'utils/adapter';

const initialState = adapter.getInitialState();

export const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CURRENCIES_FETCHED: {
      return {
        ...adapter.addMany(state, action.currencies.map(({ code }) => ({ id: code, name: code }))),
        isLoaded: true,
      };
    }
    default:
      return state;
  }
};
