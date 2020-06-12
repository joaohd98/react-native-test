import 'react-native';
import React from 'react';

import {shallow} from 'enzyme';
import {GuessWordScreenCongrats, GuessWordScreenCongratsProps} from './index';
import {GuessWordScreenCongratsStyles} from './styles';
import {findByComponent} from '../../../../helpers/test/';

const {View, Text} = GuessWordScreenCongratsStyles;

const defaultProps: GuessWordScreenCongratsProps = {
  success: false,
}

const setup = (props: GuessWordScreenCongratsProps  = {}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<GuessWordScreenCongrats {...setupProps} />)
}

test("render without error", () => {
  const wrapper = setup();
  const component = findByComponent(wrapper, View);
  expect(component.length).toBe(1);
});


test("render no text when prop 'success' is false", () => {
  const wrapper = setup({success: false});
  const component = findByComponent(wrapper, Text);
  expect(component.length).toBe(0);
});

test("render no empty text when prop 'success' is true", () => {
  const wrapper = setup({success: true});
  const component = findByComponent(wrapper, Text);
  expect(component.text()).not.toBe("");
});
