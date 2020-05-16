import * as requests from 'api/requests';
import { transaction } from 'api/urls';

export const fetchTransactions = params => requests.get(transaction.list(params));
export const createTransaction = body => requests.post(transaction.list(), body);
export const deleteTransaction = id => requests.remove(transaction.item(id));
export const editTransaction = body => requests.put(transaction.item(body.id), body);
