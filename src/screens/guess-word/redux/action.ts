export const GuessWordScreenAction = {
  CORRECT_GUESS: "CORRECT_GUESS"
}

export const correctGuess = () => {
  return {
    type: GuessWordScreenAction.CORRECT_GUESS
  };
}

