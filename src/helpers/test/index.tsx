import {ShallowWrapper} from 'enzyme';
import {createStore} from 'redux';
import {combinedReducers} from '../../redux/reducers';

export const storeFactory = (initialState: any) => {
  return createStore(combinedReducers, initialState);
}

export const findByComponent = (wrapper: ShallowWrapper, component: Element): ShallowWrapper => {
  return wrapper.find(component);
}
