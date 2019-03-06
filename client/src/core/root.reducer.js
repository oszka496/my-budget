import { combineReducers } from 'redux';
import { categoryReducer } from 'categories/category.reducer';
import { profileReducer } from 'profile/profile.reducer';
import { transactionReducer } from 'transactions/transaction.reducer';
import { messageReducer } from 'core/message.reducer';
import { authReducer } from 'auth/auth.reducer';
import { USER_LOGGED_OUT } from 'auth/auth.actions';

export const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  categories: categoryReducer,
  profile: profileReducer,
  transactions: transactionReducer,
});

export const metaReducer = (state, action) => (
  action.type === USER_LOGGED_OUT ? rootReducer(undefined, {}) : rootReducer(state, action)
);
