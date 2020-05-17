import { createSelector } from '@reduxjs/toolkit';
import Adapter from 'utils/adapter';

const adapter = new Adapter();

const selectors = adapter.getSelectors('categories');

export const getCategoriesState = selectors.selectItems;
export const selectCategories = selectors.selectEntities;
export const selectCategoriesAll = selectors.selectItemsList;

export const getCategoriesFetchStatus = createSelector(
  getCategoriesState,
  ({ fetchStatus }) => fetchStatus,
);

export const getCategoryById = selectors.selectById;
export const getActiveCategoryId = createSelector(
  getCategoriesState,
  ({ activeCategory }) => activeCategory,
);
export const getActiveCategory = createSelector(
  [selectCategories, getActiveCategoryId],
  (categories, id) => categories[id] || { name: 'All transactions' },
);
