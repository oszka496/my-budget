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
      fetchStatus: ACTION_STATUS.SUCCESS,
      ...adapter.addMany(state, action.payload.map(({ code }) => ({ id: code, name: code }))),
    }),
    fetchError: (state) => ({ ...state, fetchStatus: ACTION_STATUS.ERROR }),
  },
});
