import { FETCH_CATEGORIES } from './category.types';

export const fetchCategories = () => ({ type: FETCH_CATEGORIES.START });
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES.SUCCESS,
  categories,
});
export const fetchCategoriesError = () => ({ type: FETCH_CATEGORIES.ERROR });
