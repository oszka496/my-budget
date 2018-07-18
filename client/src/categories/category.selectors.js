import Adapter from '../utils/adapter';

const adapter = new Adapter();

const selectors = adapter.getSelectors('categories');

export const selectCategoriesAll = selectors.selectItemsList;
