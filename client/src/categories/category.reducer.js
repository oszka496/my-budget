import Adapter from 'utils/adapter';
import * as ACTION_TYPES from './category.types';


const adapter = new Adapter();
const initialCategoriesState = adapter.getInitialState();

export const categoryReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_CATEGORIES.SUCCESS: {
      return { ...adapter.addMany(state, action.categories), isLoaded: true };
    }
    default:
      return state;
  }
};
