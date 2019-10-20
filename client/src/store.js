import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './core/root.epic';
import { metaReducer } from './core/root.reducer';

const epicMiddleware = createEpicMiddleware();

const initialState = {
  auth: {
    token: localStorage.getItem('token'),
  },
};

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(metaReducer, initialState, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);
