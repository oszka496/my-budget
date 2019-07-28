import { combineEpics } from 'redux-observable';
import { currencyEpic } from 'currencies/currency.epic';

export const rootEpic = combineEpics(currencyEpic);
