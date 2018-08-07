import Adapter from './adapter';

describe('State adapter', () => {
  const adapter = new Adapter();

  it('should add one element', () => {
    const stateBefore = {
      ids: [5, 7],
      entities: {
        5: { id: 5, name: 'E' },
        7: { id: 7, name: 'G' },
      },
    };
    const newItem = { id: 9, name: 'I' };
    const expectedState = {
      ids: [5, 7, 9],
      entities: {
        5: { id: 5, name: 'E' },
        7: { id: 7, name: 'G' },
        9: { id: 9, name: 'I' },
      },
    };
    const stateAfter = adapter.addOne(stateBefore, newItem);
    expect(stateAfter).toEqual(expectedState);
  });

  it('should add many elements', () => {
    const stateBefore = {
      isLoaded: true,
    };
    const items = [{ id: 5, name: 'E' }, { id: 7, name: 'G' }];
    const expectedState = {
      isLoaded: true,
      ids: [5, 7],
      entities: {
        5: { id: 5, name: 'E' },
        7: { id: 7, name: 'G' },
      },
    };
    const stateAfter = adapter.addMany(stateBefore, items);
    expect(stateAfter).toEqual(expectedState);
  });

  it('should remove one element by id', () => {
    const stateBefore = {
      ids: [5, 7, 9],
      entities: {
        5: { id: 5, name: 'E' },
        7: { id: 7, name: 'G' },
        9: { id: 9, name: 'I' },
      },
    };
    const removedId = 7;
    const expectedState = {
      ids: [5, 9],
      entities: {
        5: { id: 5, name: 'E' },
        9: { id: 9, name: 'I' },
      },
    };
    const stateAfter = adapter.deleteOne(stateBefore, removedId);
    expect(stateAfter).toEqual(expectedState);
  });
});
