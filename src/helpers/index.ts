export const getLetterMatchCount = (guessedWord: string, secretWord: string): number => {
  const guessedSet = new Set(guessedWord.split(""));
  const secretSet = new Set(secretWord.split(""));

  return [...secretSet].filter(letter => guessedSet.has(letter)).length;
}
