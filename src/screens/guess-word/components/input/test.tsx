import {shallow} from 'enzyme';
import React from 'react';
import {GuessWordScreenInput} from './index';
import {storeFactory} from '../../../../helpers/test/';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  
  return shallow(<GuessWordScreenInput store={store}/>).dive();
}

describe("render", () => {
  describe("word has not been guessed", () => {
    test("render component without error", () => {

    });
    test("render input box", () => {

    });
    test("render submit button", () => {

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
