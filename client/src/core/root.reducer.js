import { combineReducers } from 'redux';
import { categoryReducer } from '../categories/category.reducer';
import { transactionReducer } from '../transactions/transaction.reducer';
import { messageReducer } from './message.reducer';
import { authReducer } from '../auth/auth.reducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  categories: categoryReducer,
  transactions: transactionReducer,
});
