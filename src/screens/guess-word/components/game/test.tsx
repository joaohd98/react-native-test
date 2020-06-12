import 'react-native';
import React from 'react';

import {shallow, ShallowWrapper} from 'enzyme';
import {findByComponent} from '../../../../helpers/test-helpers';
import {GuessWordScreenGame, GuessWordScreenGameProps} from './index';
import {GuessWordScreenGameStyles} from './styles';

const {Container, TextInstructions, ViewGuessedContainer, ViewGuessed, TextGuessed} = GuessWordScreenGameStyles;

const defaultProps: GuessWordScreenGameProps = {
  guessedWords: [
    { guessedWord: "train", letterMatcherCount: 3},
  ]
}

const setup = (props: GuessWordScreenGameProps = {}): ShallowWrapper => {
  const setupProps =  {...defaultProps, ...props};
  return shallow(<GuessWordScreenGame {...setupProps} />);
};

describe("if there are no words guessed", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = setup({guessedWords: []});
  });

  test("renders without any error", () => {
    const component = findByComponent(wrapper, Container);

    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const component = findByComponent(wrapper, TextInstructions);

    expect(component.length).not.toBe("");
  });
});

describe("if there are words guessed", () => {
  let wrapper: ShallowWrapper;

  const props: GuessWordScreenGameProps = {
    guessedWords: [
      { guessedWord: "Mario", letterMatcherCount: 2 },
      { guessedWord: "Luigi", letterMatcherCount: 4 },
      { guessedWord: "Peach", letterMatcherCount: 5 },
    ]
  };

  beforeEach(() => {
    wrapper = setup(props);
  });

  test("render without any errors", () => {
    const component = findByComponent(wrapper, Container);
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess a word", () => {
    const component = findByComponent(wrapper, ViewGuessedContainer);
    expect(component.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const component = findByComponent(wrapper, ViewGuessed);
    expect(component.length).toBe(props.guessedWords?.length);
  });

});

