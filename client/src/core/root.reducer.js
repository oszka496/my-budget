import { combineReducers } from 'redux';
import { categoryReducer } from '../categories/category.reducer';

export const rootReducer = combineReducers({
  categories: categoryReducer,
});
