import {GuessWordScreenAction} from './action';

export const GuessWordScreenInitialState = {
  isCorrect: false,
}

export const GuessWordScreenReducer = (state = GuessWordScreenInitialState, action: any = {}) => {

  switch (action.type) {

    case GuessWordScreenAction.CORRECT_GUESS: {
      return {
        isCorrect: true,
      }
    }

    default: {
      return state;
    }
  }
}
