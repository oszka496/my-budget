const initialTransactionsState = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      title: 'Transaction 1',
    },
    2: {
      id: 2,
      title: 'Transaction 2',
    },
  },
};

export const transactionReducer = (state = initialTransactionsState, action) =>
  state;
