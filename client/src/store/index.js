import { createStore } from 'redux';
import * as actions from './actions';
import CategoryModel from '../models/category.model';

const initialState = {
  categories: {
    ids: [],
    entities: {},
  },
};

// TODO: Combine reducers
function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CATEGORIES_FETCHED: {
      const entities = action.categories.reduce(
        (obj, entry) => ({
          ...obj,
          [entry.id]: new CategoryModel(entry.name, entry.id),
        }),
        {}
      );

      return {
        ...state,
        categories: {
          ids: Object.keys(entities),
          entities,
        },
      };
    }
    default:
      return state;
  }
}

export default createStore(reducer);
