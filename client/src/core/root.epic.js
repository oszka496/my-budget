import { combineEpics } from 'redux-observable';
import { currencyEpic } from 'currencies/currency.epic';
import { transactionsEpic } from 'transactions/transaction.epic';
import { authEpic } from '../auth/auth.epic';

export const rootEpic = combineEpics(authEpic, currencyEpic, transactionsEpic);
