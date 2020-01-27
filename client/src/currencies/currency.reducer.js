import { createSlice } from '@reduxjs/toolkit';
import { adapter } from 'utils/adapter';
import { ACTION_STATUS } from '../utils/actions.utils';

const initialState = adapter.getInitialState();

export const currencySlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    fetchStart: (state) => ({ ...state, fetchStatus: ACTION_STATUS.IN_PROGRESS }),
    fetchSuccess: (state, action) => ({
      ...adapter.addMany(state, action.payload.map(({ code }) => ({ id: code, name: code }))),
      fetchStatus: ACTION_STATUS.SUCCESS,
    }),
    fetchError: (state) => ({ ...state, fetchStatus: ACTION_STATUS.ERROR }),
  },
});

export const currencyActions = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
