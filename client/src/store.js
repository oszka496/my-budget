import { createStore } from 'redux';
import { rootReducer } from './core/root.reducer';

const initialState = {
  auth: {
    token: localStorage.getItem('token'),
  },
};
export default createStore(rootReducer, initialState);
