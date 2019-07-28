import { createSlice } from 'redux-starter-kit';
import { adapter } from 'utils/adapter';

const initialState = adapter.getInitialState();

export const currencySlice = createSlice({
  reducers: {
    currenciesFetched: (state, action) => ({
      isLoaded: true,
      ...adapter.addMany(state, action.payload.map(({ code }) => ({ id: code, name: code }))),
    }),
    fetchCurrencies: (state) => ({ ...state, isLoaded: false }),
    fetchCurrenciesError: (state) => ({ ...state, isLoaded: true }),
  },
  initialState,
  slice: 'currencies',
});
