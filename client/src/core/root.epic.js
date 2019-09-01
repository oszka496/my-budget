import { combineEpics } from 'redux-observable';
import { currencyEpic } from 'currencies/currency.epic';
import { transactionsEpic } from 'transactions/transaction.epic';

export const rootEpic = combineEpics(currencyEpic, transactionsEpic);
