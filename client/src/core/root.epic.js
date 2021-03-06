import { combineEpics } from 'redux-observable';
import { authEpic } from 'auth/auth.epic';
import { categoriesEpic } from 'categories/category.epic';
import { currencyEpic } from 'currencies/currency.epic';
import { transactionsEpic } from 'transactions/transaction.epic';
import { profileEpic } from 'profile/profile.epic';

export const rootEpic = combineEpics(
  authEpic,
  currencyEpic,
  categoriesEpic,
  profileEpic,
  transactionsEpic,
);
