import * as requests from 'api/requests';
import { transaction } from 'api/urls';

export const fetchTransactions = () => requests.get(transaction.list());
export const createTransaction = body => requests.post(transaction.list(), body);
export const deleteTransaction = id => requests.remove(transaction.item(id));
