import api from '../api';

export const fetchTransactions = () => api.requests.get(api.transaction.list());
export const deleteTransaction = id => api.requests.remove(api.transaction.item(id));
