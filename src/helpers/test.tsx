import 'react-native';
import React from 'react';
import {getLetterMatchCount} from './index';

describe("getLetterMatchCount", () => {
  const secretWord = "party";

  test("returns zero count when there are no matching letters", () => {
    const word = getLetterMatchCount('bones', secretWord);

    expect(word).toBe(0);
  });

  test("returns three count when there are 3 matching letters", () => {
    const word = getLetterMatchCount('par', secretWord);

    expect(word).toBe(3);
  });

  test("returns corrent count when there are duplicate letters in matching letters", () => {
    const word = getLetterMatchCount('parparparpar', secretWord);

    expect(word).toBe(3);
  });
})
