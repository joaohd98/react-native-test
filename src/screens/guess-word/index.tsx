import React from 'react';
import {GuessWordScreenCongrats} from './components/congrats';
import {GuessWordScreenGame} from './components/game';
import {GuessWordScreenStyles} from './styles';
import {GuessWordScreenProps} from './model';
import {ReduxGlobal} from '../../redux/reducers';
import {connect} from 'react-redux';
import {getSecretWord} from './redux/action';
import {GuessWordScreenInput} from './components/input';

export class UnconnectedGuessWord extends React.Component<GuessWordScreenProps> {
  componentDidMount() {
    this.props.getSecretWord?.();
  }

  render() {
    const {ViewContainer, TextTitle} = GuessWordScreenStyles;

    return (
      <ViewContainer>
        <TextTitle>Jotto</TextTitle>
        <GuessWordScreenCongrats success={this.props.isCorrect} />
        <GuessWordScreenInput />
        <GuessWordScreenGame guessedWords={this.props.guessedWords}/>
      </ViewContainer>
    )
  }
}


const mapStateToProps = (props: ReduxGlobal): GuessWordScreenProps  => {
  return props.guessWordScreenReducer!;
};


export const GuessWordScreen = connect(mapStateToProps, {getSecretWord})(UnconnectedGuessWord);

