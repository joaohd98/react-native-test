import React from 'react';
import {connect} from 'react-redux';
import {GuessWordScreenInputStyles} from './styles';
import {ReduxGlobal} from '../../../../redux/reducers';
import {GuessWordScreenInputProps} from './model';
import {guessWord} from '../../redux/action';

class Input extends React.Component<GuessWordScreenInputProps> {

  renderHasGuessedWord = () => {
    const {ViewInput} = GuessWordScreenInputStyles;
    return (
      <ViewInput />
    );
  }

  renderHasNotGuessedWord = () => {
    const {ViewInput, InputBox, TouchableOpacitySend, TouchableOpacityText} = GuessWordScreenInputStyles;

    return (
      <ViewInput>
        <InputBox />
        <TouchableOpacitySend>
          <TouchableOpacityText>
            MARIO
          </TouchableOpacityText>
        </TouchableOpacitySend>
      </ViewInput>
    );
  }

  render() {
    return this.props.isCorrect ? this.renderHasNotGuessedWord() : this.renderHasGuessedWord();
  }
}


const mapStateToProps = (props: ReduxGlobal): GuessWordScreenInputProps  => {
  return {
    ...props.guessWordScreenReducer
  };
}


export const GuessWordScreenInput = connect(mapStateToProps, {guessWord})(Input);

