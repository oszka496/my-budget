import { createSelector } from 'reselect';

class Adapter {
  getInitialState() {
    return {
      ids: [],
      entities: {},
      isLoaded: false,
    };
  }

  addOne(state, entity) {
    const { ids, entities } = state;
    const { id } = entity;
    return { ...state, ids: [...ids, id], entities: { ...entities, [id]: entity } };
  }

  addMany(state, items) {
    const entities = items.reduce(
      (obj, entry) => ({
        ...obj,
        [entry.id]: entry,
      }),
      {},
    );

    return {
      ...state,
      ids: items.map(item => item.id),
      entities,
    };
  }

  getSelectors(key) {
    const selectItems = state => state[key];
    const selectIds = createSelector(selectItems, items => items.ids);
    const selectEntities = createSelector(selectItems, items => items.entities);
    const selectItemsList = createSelector(
      [selectIds, selectEntities],
      (ids, entities) => ids.map(id => entities[id]),
    );
    return {
      selectIds,
      selectEntities,
      selectItemsList,
    };
  }
}

export default Adapter;
