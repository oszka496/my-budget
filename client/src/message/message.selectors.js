import Adapter from '../utils/adapter';

const adapter = new Adapter();

const selectors = adapter.getSelectors('messages');

export const selectMessages = selectors.selectItemsList;
