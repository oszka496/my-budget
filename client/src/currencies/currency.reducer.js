import { createSlice } from 'redux-starter-kit';
import { adapter } from 'utils/adapter';
import { ACTION_STATUS } from '../utils/actions.utils';

const initialState = adapter.getInitialState();

export const currencySlice = createSlice({
  reducers: {
    fetchStart: (state) => ({ ...state, fetchStatus: ACTION_STATUS.IN_PROGRESS }),
    fetchSuccess: (state, action) => ({
      fetchStatus: ACTION_STATUS.SUCCESS,
      ...adapter.addMany(state, action.payload.map(({ code }) => ({ id: code, name: code }))),
    }),
    fetchError: (state) => ({ ...state, fetchStatus: ACTION_STATUS.ERROR }),
  },
  initialState,
  slice: 'currencies',
});
