import {combineReducers} from 'redux';
import {GuessWordScreenReducer} from '../screens/guess-word/redux/reducer';
import {GuessWordScreenProps} from '../screens/guess-word/model';

export interface ReduxGlobal {
  guessWordScreenReducer?: GuessWordScreenProps,
}

export const combinedReducers = combineReducers({
  guessWordScreenReducer: GuessWordScreenReducer
});
