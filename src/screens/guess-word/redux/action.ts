import {Dispatch} from 'redux';
import {getLetterMatchCount} from '../../../helpers';
import {ReduxGlobal} from '../../../redux/reducers';
import axios from "axios";

export const GuessWordScreenAction = {
  CORRECT_GUESS: "CORRECT_GUESS",
  INCORRECT_GUESS: "INCORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
}

export const guessWord = (guessedWord: string) => {
  return function(dispatch: Dispatch, getState: () => ReduxGlobal) {
    const secretWord = getState().guessWordScreenReducer?.secretWord!;
    const letterMatcherCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: GuessWordScreenAction.INCORRECT_GUESS,
      guessedWords: {
        guessedWord,
        letterMatcherCount,
      }
    });

    if(secretWord === guessedWord) {
      dispatch({
        type: GuessWordScreenAction.CORRECT_GUESS,
      });
    }
  }
}

export const getSecretWord = () => {
  return (dispatch: Dispatch) => {
    return axios.get("https://random-word-api.herokuapp.com/word").then(({data}) => {
      dispatch({
        type: GuessWordScreenAction.SET_SECRET_WORD,
        secretWord: data,
      })
    })
  }
}
