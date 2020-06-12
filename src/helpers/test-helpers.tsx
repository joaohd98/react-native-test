import {ShallowWrapper} from 'enzyme';

export const findByComponent = (wrapper: ShallowWrapper, component: Element): ShallowWrapper => {
  return wrapper.find(component);
}
