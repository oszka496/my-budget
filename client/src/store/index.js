import { createStore } from 'redux';
import * as actions from './actions';

const initialState = {
    categories: {
        ids: [],
        entities: {}
    }
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_CATEGORIES:
            const {categories} = action;
            return {
                ...state,
                categories: {
                    ids: Object.keys(categories),
                    entities: categories
                }
            };
        default:
            return state;
    }
}
export const store = createStore(reducer);
