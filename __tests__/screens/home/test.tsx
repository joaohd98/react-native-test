/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {CounterNumberScreen} from '../../../src/screens/count-number';

test("render without error", () => {
  const wrapper = shallow(<CounterNumberScreen />);
  expect(wrapper).toBeTruthy();
});

test("render increment button", () => {

});

test("render counter display", () => {

});

test("counter start at 0", () => {

});

test("clicking button increments counter display", () => {

});
