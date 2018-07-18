import { createSelector } from 'reselect';

class Adapter {
  getInitialState() {
    return {
      ids: [],
      entities: {},
      isLoaded: false,
    };
  }

  addMany(state, items) {
    const entities = items.reduce(
      (obj, entry) => ({
        ...obj,
        [entry.id]: entry,
      }),
      {}
    );

    return {
      ...state,
      ids: Object.keys(entities),
      entities,
      isLoaded: true,
    };
  }

  getSelectors(key) {
    const selectItems = state => state[key];
    const selectIds = createSelector(selectItems, items => items.ids);
    const selectEntities = createSelector(selectItems, items => items.entities);
    const selectItemsList = createSelector(
      [selectIds, selectEntities],
      (ids, entities) => ids.map(id => entities[id])
    );
    return {
      selectItemsList,
    };
  }
}

export default Adapter;
