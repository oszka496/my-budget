export const FETCH_CATEGORIES = 'CATEGORIES:FETCH';

export const fetchCategoriesAction = (categories) => {
    return {
        type: FETCH_CATEGORIES,
        categories: categories,
    }
};
