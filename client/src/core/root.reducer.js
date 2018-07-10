import { combineReducers } from 'redux';
import { categoryReducer } from '../categories/category.reducer';
import { transactionReducer } from '../transactions/transaction.reducer';

export const rootReducer = combineReducers({
  categories: categoryReducer,
  transactions: transactionReducer,
});
