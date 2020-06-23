import {ReduxGlobal} from '../../redux/reducers';
import {storeFactory} from '../../helpers/test/';
import {shallow} from 'enzyme';
import {GuessWordScreenInput} from './components/input';
import React from 'react';
import {GuessWordScreen} from './index';

const setup = (initialState: ReduxGlobal) => {
  const store = storeFactory(initialState);
  // @ts-ignore
  return shallow(<GuessWordScreen store={store}/>).dive().dive();
}

describe("redux props", () => {
  test("has success piece of state as prop", () => {
    const isCorrect = true;
    const wrapper = setup({guessWordScreenReducer: {isCorrect}});
    // @ts-ignore
    const isCorrectProp = wrapper.instance().props.isCorrect;
    expect(isCorrectProp).toBe(isCorrect);
  });

  test("'guessedWord' piece of state as prop", () => {

    const guessedWords = [
      {
        guessedWord: "abc",
        letterMatcherCount: 2
      },
      {
        guessedWord: "cde",
        letterMatcherCount: 1
      },
      {
        guessedWord: "acg",
        letterMatcherCount: 3
      },
    ];
    const wrapper = setup({
      guessWordScreenReducer: {
        guessedWords,
      }
    });

    // @ts-ignore
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toBe(guessedWords);
  });

  test("'secretWord' piece of state as prop", () => {

    const secretWord = "party";

    const wrapper = setup({
      guessWordScreenReducer: {
        secretWord,
      }
    });

    // @ts-ignore
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });

  test("'getSecretWord' action creator is a function prop", () => {
    const wrapper = setup({});
    // @ts-ignore
    const getSecretWord = wrapper.instance().props.getSecretWord;

    expect(getSecretWord).toBeInstanceOf(Function);
  });

})
