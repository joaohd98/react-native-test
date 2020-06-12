import {createStore} from 'redux';
import {combinedReducers} from './reducers';

export const createdStore = createStore(combinedReducers);
