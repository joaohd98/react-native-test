import {Dispatch} from 'redux';
import {getLetterMatchCount} from '../../../helpers';
import {ReduxGlobal} from '../../../redux/reducers';

export const GuessWordScreenAction = {
  CORRECT_GUESS: "CORRECT_GUESS",
  INCORRECT_GUESS: "INCORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
}

export const guessWord = (guessedWord: string) => {
  return function(dispatch: any, getState: () => ReduxGlobal) {
    const secretWord = getState().guessWordScreenReducer?.secretWord!;
    const letterMatcherCount = getLetterMatchCount(guessedWord, secretWord);

    if(letterMatcherCount === secretWord.length) {
      dispatch({
        type: GuessWordScreenAction.CORRECT_GUESS,
      });
    }

    else {
      dispatch({
        type: GuessWordScreenAction.INCORRECT_GUESS,
        guessedWords: {
          guessedWord,
          letterMatcherCount,
        }
      })
    }

  }
}

