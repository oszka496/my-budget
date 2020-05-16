import { createSelector } from '@reduxjs/toolkit';

class Adapter {
  getInitialState() {
    return {
      ids: [],
      entities: {},
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

  replaceOne(state, entity) {
    const { entities } = state;
    const { id } = entity;
    return { ...state, entities: { ...entities, [id]: entity } };
  }

  deleteOne(state, id) {
    const ids = state.ids.filter(elem => elem !== id);
    const entities = ids.reduce((obj, i) => ({ ...obj, [i]: state.entities[i] }), {});
    return { ...state, ids, entities };
  }

  getSelectors(key) {
    const selectItems = state => state[key];
    const selectIds = createSelector(selectItems, items => items.ids);
    const selectEntities = createSelector(selectItems, items => items.entities);
    const selectItemsList = createSelector(
      [selectIds, selectEntities],
      (ids, entities) => ids.map(id => entities[id]),
    );
    const selectById = createSelector(
      [selectEntities, (_, props) => props.id],
      (items, id) => items[id],
    );
    return {
      selectItems,
      selectIds,
      selectEntities,
      selectItemsList,
      selectById,
    };
  }
}

export default Adapter;

export const adapter = new Adapter();
