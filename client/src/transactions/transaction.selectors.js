import Adapter from '../utils/adapter';

const adapter = new Adapter();

const selectors = adapter.getSelectors('transactions');

export const selectTransactionsAll = selectors.selectItemsList;
