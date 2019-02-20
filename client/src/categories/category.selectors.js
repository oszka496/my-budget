import Adapter from 'utils/adapter';

const adapter = new Adapter();

const selectors = adapter.getSelectors('categories');

export const selectCategories = selectors.selectEntities;
export const selectCategoriesAll = selectors.selectItemsList;
