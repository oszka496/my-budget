import { createSlice } from '@reduxjs/toolkit';
import { adapter } from 'utils/adapter';
import { ACTION_STATUS } from '../utils/actions.utils';

const { NOT_STARTED, IN_PROGRESS, ERROR, SUCCESS } = ACTION_STATUS;

const itemsState = adapter.getInitialState();
export const initialState = {
  ...itemsState,
  fetchStatus: NOT_STARTED,
  createStatus: {},
  deleteStatus: {},
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    fetchStart: state => ({ ...state, fetchStatus: IN_PROGRESS }),
    fetchSuccess: (state, action) => ({
      ...adapter.addMany(state, action.payload),
      fetchStatus: SUCCESS,
    }),
    fetchError: state => ({ ...state, fetchStatus: ERROR }),

    createStart: (state, { payload }) => {
      const createStatus = { ...state.createStatus, [payload.id]: IN_PROGRESS };
      return { ...state, createStatus };
    },
    createSuccess: (state, { payload }) => {
      const createStatus = { ...state.createStatus, [payload.id]: SUCCESS };
      return { ...adapter.addOne(state, payload), createStatus };
    },
    createError: (state, { payload }) => {
      const createStatus = { ...state.createStatus, [payload.id]: ERROR };
      return { ...state, createStatus };
    },

    deleteStart: (state, { payload: id }) => {
      const deleteStatus = { ...state.deleteStatus, [id]: IN_PROGRESS };
      return { ...state, deleteStatus };
    },
    deleteSuccess: (state, { payload: id }) => {
      const deleteStatus = { ...state.deleteStatus, [id]: SUCCESS };
      return { ...adapter.deleteOne(state, id), deleteStatus };
    },
    deleteError: (state, { payload: id }) => {
      const deleteStatus = { ...state.deleteStatus, [id]: ERROR };
      return { ...state, deleteStatus };
    },

    edit: (state) => state,
  },
});

export const transactionActions = transactionSlice.actions;
export const transactionReducer = transactionSlice.reducer;
