import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import {shallow, ShallowWrapper} from 'enzyme';
import {CounterNumberScreen} from '../../../src/screens/count-number';
import {CounterNumberScreenStyles} from '../../../src/screens/count-number/styles';

const {View, TextNumber, TouchableOpacityButton, TextTouchableOpacity} = CounterNumberScreenStyles;

/**
 * Factory function to create ShallowWrapper for the CounterNumberScreen
 * @function setup
 * @param {object} props - Component props specific for this setup
 * @param {any} state - Initial State setup
 * @return {ShallowWrapper}
*/
const setup = (props: object = {}, state: any = null): ShallowWrapper => {
  const wrapper = shallow(<CounterNumberScreen {...props} />)

  if(state) {
    wrapper.setState(state);
  }

  return wrapper;
}

/**
 * Function to find a specific component in ShallowWrapper
 * @function findByComponent
 * @param {ShallowWrapper} wrapper - Where will happen the search
 * @param {Element} component - The component that we want to find
 * @return {ShallowWrapper}
*/
const findByComponent = (wrapper: ShallowWrapper, component: Element): ShallowWrapper => {
  return wrapper.find(component);
}

test("render without error", () => {
  const wrapper = findByComponent(setup(), View);
  expect(wrapper.length).toEqual(1);
});

test("render increment button", () => {
  const wrapper = findByComponent(setup(), TouchableOpacityButton);
  expect(wrapper.length).toEqual(1);
});

test("render counter display", () => {
  const wrapper = findByComponent(setup(), TextNumber);
  expect(wrapper.length).toEqual(1);
});

test("counter start at 0", () => {
  const wrapper = setup();
  expect(wrapper.state("counter")).toEqual(0);
});

test("clicking button increments counter display", () => {
  const counter = 7;

  const wrapper = setup({}, {counter});

  const button = findByComponent(wrapper, TouchableOpacityButton);
  button.simulate("press");

  const textNumber = findByComponent(wrapper, TextNumber);
  expect(textNumber.text()).toContain(counter + 1);

});
