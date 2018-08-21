import { createStore } from 'redux';
import { metaReducer } from './core/root.reducer';

const initialState = {
  auth: {
    token: localStorage.getItem('token'),
  },
};
export default createStore(metaReducer, initialState);
