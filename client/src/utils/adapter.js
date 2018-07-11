class Adapter {
  getInitialState() {
    return {
      ids: [],
      entities: {},
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
    };
  }
}

export default Adapter;
