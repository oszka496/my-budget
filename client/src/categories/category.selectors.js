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
