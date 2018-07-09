import { createSelector } from 'reselect';

export const selectCategories = state => state.categories;
export const selectCategoriesIds = createSelector(
  selectCategories,
  categories => categories.ids
);
export const selectCategoriesEntities = createSelector(
  selectCategories,
  categories => categories.entities
);
export const selectCategoriesAll = createSelector(
  [selectCategoriesIds, selectCategoriesEntities],
  (ids, entities) => ids.map(id => entities[id])
);
