import * as actions from './category.actions';
import CategoryModel from './category.model';

const initialCategoriesState = {
  ids: [],
  entities: {},
};

export const categoryReducer = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case actions.CATEGORIES_FETCHED: {
      const entities = action.categories.reduce(
        (obj, entry) => ({
          ...obj,
          [entry.id]: new CategoryModel(entry.name, entry.id),
        }),
        {}
      );

      return {
        ...state,
        ids: Object.keys(entities),
        entities,
      };
    }
    default:
      return state;
  }
};
