import { combineReducers } from 'redux';
import { categoryReducer } from 'categories/category.reducer';
import { profileReducer } from 'profile/profile.reducer';
import { transactionReducer } from 'transactions/transaction.reducer';
import { messageReducer } from 'core/message.reducer';
import { authReducer } from 'auth/auth.reducer';
import { LOGOUT } from 'auth/auth.actions';
import { currencySlice } from 'currencies/currency.reducer';


export const rootReducer = combineReducers({
  auth: authReducer,
  messages: messageReducer,
  categories: categoryReducer,
  currencies: currencySlice.reducer,
  profile: profileReducer,
  transactions: transactionReducer,
});

export const metaReducer = (state, action) => (
  action.type === LOGOUT ? rootReducer(undefined, {}) : rootReducer(state, action)
);
