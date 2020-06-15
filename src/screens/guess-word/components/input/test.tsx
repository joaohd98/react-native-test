import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {GuessWordScreenInput} from './index';
import {storeFactory} from '../../../../helpers/test/';
import {GuessWordScreenInputStyles} from './styles';
import {ReduxGlobal} from '../../../../redux/reducers';

const {ViewInput, InputBox, TouchableOpacitySend} = GuessWordScreenInputStyles;

const setup = (initialState: ReduxGlobal) => {
  const store = storeFactory(initialState);
  return shallow(<GuessWordScreenInput store={store}/>).dive();
}

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup({guessWordScreenReducer: {isCorrect: false}});
      console.log(wrapper.debug());
    });

    test("render component without error", () => {
      const component = wrapper.find(ViewInput);
      expect(component.length).toBe(1);
    });
    test("render input box", () => {
      const component = wrapper.find(InputBox);
      expect(component.length).toBe(1);
    });
    test("render submit button", () => {
      const component = wrapper.find(TouchableOpacitySend);
      expect(component.length).toBe(1);
    });
  });

  describe("word has been guessed", () => {
    test("render component without error", () => {

    });
    test("does not render input box", () => {

    });
    test("does not render submit button", () => {

    });
  });
})

describe("update state", () => {

})
