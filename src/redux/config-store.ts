import {applyMiddleware, createStore} from 'redux';
import {combinedReducers} from './reducers';
import ReduxThunk from "redux-thunk";

const middlewares = [ReduxThunk];
export const createdStore = createStore(combinedReducers, applyMiddleware(...middlewares));
