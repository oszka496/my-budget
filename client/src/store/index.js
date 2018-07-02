import { createStore } from 'redux';
import * as actions from './actions';

const initialState = {
  categories: {
    ids: [],
    entities: {},
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_CATEGORIES:
      return {
        ...state,
        categories: {
          ids: Object.keys(action.categories),
          entities: action.categories,
        },
      };
    default:
      return state;
  }
}

export default createStore(reducer);
