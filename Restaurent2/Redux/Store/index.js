import { createStore, applyMiddleware } from 'redux';
import Reducers from '../Reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const initialState = {};

const store = createStore(Reducers, initialState, applyMiddleware(...middlewares));

export default store;