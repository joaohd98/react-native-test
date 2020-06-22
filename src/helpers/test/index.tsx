import {ShallowWrapper} from 'enzyme';
import {applyMiddleware, createStore} from 'redux';
import {combinedReducers} from '../../redux/reducers';
import ReduxThunk from 'redux-thunk';

export const storeFactory = (initialState: any) => {
  const middlewares = [ReduxThunk];
  return createStore(combinedReducers, initialState, applyMiddleware(...middlewares));
}

export const findByComponent = (wrapper: ShallowWrapper, component: Element): ShallowWrapper => {
  return wrapper.find(component);
}
