export interface GuessWordScreenProps {
  isCorrect?: boolean;
  secretWord?: string;
  guessedWords?: {guessedWord: string, letterMatcherCount: number}[];
}
