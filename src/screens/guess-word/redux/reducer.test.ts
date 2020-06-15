import {GuessWordScreenAction} from "./action";
import {GuessWordScreenInitialState, GuessWordScreenReducer} from './reducer';

describe("GuessWordScreenReducer", () => {
  test("return default initial state of 'false' when no action is passed", () => {
    const newState = GuessWordScreenReducer();
    expect(newState).toEqual(GuessWordScreenInitialState);
  })

  test("returns state of true upon receiving an action of type 'CORRECT_GUESS'", () => {
    const newState = GuessWordScreenReducer(undefined, {type: GuessWordScreenAction.CORRECT_GUESS});
    expect(newState.isCorrect).toEqual(true);
  })
})
