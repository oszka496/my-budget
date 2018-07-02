export const FETCH_CATEGORIES = 'CATEGORIES:FETCH';

export const fetchCategoriesAction = categories => ({
  type: FETCH_CATEGORIES,
  categories,
});
