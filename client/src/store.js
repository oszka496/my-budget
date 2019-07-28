import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './core/root.epic';
import { metaReducer } from './core/root.reducer';

const epicMiddleware = createEpicMiddleware();

const initialState = {
  auth: {
    token: localStorage.getItem('token'),
  },
};
export default createStore(metaReducer, initialState, applyMiddleware(epicMiddleware));

epicMiddleware.run(rootEpic);
