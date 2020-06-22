import {GuessWordScreenAction} from './action';
import {GuessWordScreenProps} from '../model';

export const GuessWordScreenInitialState: GuessWordScreenProps = {
  isCorrect: false,
  secretWord: "",
  guessedWords: [],
}

export const GuessWordScreenReducer = (state = GuessWordScreenInitialState, action: any = {}) => {

  switch (action.type) {

    case GuessWordScreenAction.CORRECT_GUESS: {
      return {
        ...state,
        isCorrect: true,
      }
    }

    case GuessWordScreenAction.INCORRECT_GUESS: {
      return {
        ...state,
        isCorrect: false,
        guessedWords: [
          ...state.guessedWords!,
          action.guessedWords
        ]
      }
    }

    case GuessWordScreenAction.SET_SECRET_WORD: {
      return {
        ...state,
        secretWord: action.secretWord[0],
      }
    }

    default: {
      return state;
    }
  }
}
