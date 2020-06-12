import {combineReducers} from 'redux';
import {GuessWordScreenReducer} from '../screens/guess-word/redux/reducer';

export const combinedReducers = combineReducers({
  GuessWordScreenReducer
});
