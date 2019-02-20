import Adapter from 'utils/adapter';
import * as actions from './category.actions';


const adapter = new Adapter();
const initialCategoriesState = adapter.getInitialState();

export const categoryReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case actions.CATEGORIES_FETCHED: {
      return { ...adapter.addMany(state, action.categories), isLoaded: true };
    }
    default:
      return state;
  }
};
