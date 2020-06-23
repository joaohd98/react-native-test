import {shallow, ShallowWrapper} from 'enzyme';
import React from 'react';
import {GuessWordScreenInput} from './index';
import {storeFactory} from '../../../../helpers/test/';
import {GuessWordScreenInputStyles} from './styles';
import {ReduxGlobal} from '../../../../redux/reducers';

const {ViewInput, InputBox, TouchableOpacitySend} = GuessWordScreenInputStyles;

const setup = (initialState: ReduxGlobal) => {
  const store = storeFactory(initialState);
  // @ts-ignore
  return shallow(<GuessWordScreenInput store={store}/>).dive().dive();
}

describe("render", () => {
  describe("word has not been guessed", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup({guessWordScreenReducer: {isCorrect: true}});
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
    let wrapper: ShallowWrapper;

    beforeEach(() => {
      wrapper = setup({guessWordScreenReducer: {isCorrect: false}});
    });

    test("render component without error", () => {
      const component = wrapper.find(ViewInput);
      expect(component.length).toBe(1);
    });
    test("does not render input box", () => {
      const component = wrapper.find(InputBox);
      expect(component.length).toBe(0);
    });
    test("does not render submit button", () => {
      const component = wrapper.find(TouchableOpacitySend);
      expect(component.length).toBe(0);
    });
  });
})

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const isCorrect = true;
    const wrapper = setup({guessWordScreenReducer: {isCorrect}});
    // @ts-ignore
    const isCorrectProp = wrapper.instance().props.isCorrect;

    expect(isCorrectProp).toBe(isCorrect);
  });

  test("'guessWord' action creator is a function prop", () => {
    const wrapper = setup({});
    // @ts-ignore
    const guessWord = wrapper.instance().props.guessWord;

    expect(guessWord).toBeInstanceOf(Function);
  });
})
