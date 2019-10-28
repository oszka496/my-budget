import * as requests from 'api-new/requests';
import { transaction } from 'api-new/urls';

export const fetchTransactions = () => requests.get(transaction.list());
export const createTransaction = body => requests.post(transaction.list(), body);
export const deleteTransaction = id => requests.remove(transaction.item(id));
