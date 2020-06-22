import 'react-native';
import {ReduxGlobal} from '../../redux/reducers';
import {storeFactory} from '../../helpers/test/';
import {guessWord} from './redux/action';
import {Store} from 'redux';
import {GuessWordScreenProps} from './model';
import {GuessWordScreenInitialState} from './redux/reducer';

describe('guessWord action dispatcher', () => {
  const secretWord = "party";
  const unsuccessfulWord = "train";

  describe('no guessed word', () => {
    let store: any;
    const initialState = {
      ...GuessWordScreenInitialState,
      secretWord
    };

    const initialStore: ReduxGlobal = {
      guessWordScreenReducer: initialState,
    };

    beforeEach(() => {
      store = storeFactory(initialStore);
    });

    test("update state correctly for unsuccessful guess", () => {

      store.dispatch(guessWord(unsuccessfulWord));

      const newState = store.getState().guessWordScreenReducer;
      const exceptedState: GuessWordScreenProps = {
        ...initialState,
        isCorrect: false,
        guessedWords: [
          {
            guessedWord: unsuccessfulWord,
            letterMatcherCount: 3
          }
        ]
      };


      expect(newState).toStrictEqual(exceptedState);

    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState().guessWordScreenReducer;
      const exceptedState: GuessWordScreenProps = {
        ...initialState,
        isCorrect: true,
      };

      expect(newState).toStrictEqual(exceptedState);
    });
  });
  describe('some guessed word', () => {
    let store: any;
    const guessedWords = [
      {
        guessedWord: "ABC",
        letterMatcherCount: 2
      },
      {
        guessedWord: "CDE",
        letterMatcherCount: 1
      },
      {
        guessedWord: "XDSAW",
        letterMatcherCount: 4
      },
    ]

    const initialState: GuessWordScreenProps = {
      ...GuessWordScreenInitialState,
      secretWord,
      guessedWords
    }

    const initialStore: ReduxGlobal = {
      guessWordScreenReducer: {
        ...GuessWordScreenInitialState,
        secretWord,
        guessedWords
      }
    };

    beforeEach(() => {
      store = storeFactory(initialStore);
    });

    test("update state correctly for unsuccessful guess", () => {
      store.dispatch(guessWord(unsuccessfulWord));

      const newState = store.getState().guessWordScreenReducer;
      const exceptedState: GuessWordScreenProps = {
        ...initialState,
        isCorrect: false,
        guessedWords: [
          ...guessedWords,
          {
            guessedWord: unsuccessfulWord,
            letterMatcherCount: 3
          }
        ]
      };

      expect(newState).toStrictEqual(exceptedState);
    });
    test("update state correctly for successful guess", () => {
      store.dispatch(guessWord(secretWord));

      const newState = store.getState().guessWordScreenReducer;
      const exceptedState: GuessWordScreenProps = {
        ...initialState,
        isCorrect: true,
      };

      expect(newState).toStrictEqual(exceptedState);
    });
  });
});
