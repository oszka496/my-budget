import { createSlice } from '@reduxjs/toolkit';
import { adapter } from 'utils/adapter';
import { ACTION_STATUS } from '../utils/actions.utils';

export const categorySlice = createSlice({
  name: 'categories',
  initialState: adapter.getInitialState(),
  reducers: {
    fetchStart: state => ({ ...state, fetchStatus: ACTION_STATUS.IN_PROGRESS }),
    fetchSuccess: (state, action) => ({
      ...adapter.addMany(state, action.payload),
      fetchStatus: ACTION_STATUS.SUCCESS,
    }),
    fetchError: state => ({ ...state, fetchStatus: ACTION_STATUS.ERROR }),
  },
});

export const categoryActions = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
