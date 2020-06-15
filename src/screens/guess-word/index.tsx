import React from 'react';
import {GuessWordScreenCongrats} from './components/congrats';
import {GuessWordScreenGame} from './components/game';
import {GuessWordScreenStyles} from './styles';
import {GuessWordScreenProps} from './model';

export class GuessWordScreen extends React.Component<GuessWordScreenProps> {
  render() {
    const {ViewContainer, TextTitle} = GuessWordScreenStyles;

    return (
      <ViewContainer>
        <TextTitle>Jotto</TextTitle>
        <GuessWordScreenCongrats success={true} />
        <GuessWordScreenGame guessedWords={[
          {guessedWord: "Mario", letterMatcherCount: 3},
          {guessedWord: "Luigi", letterMatcherCount: 3},
          {guessedWord: "Peach", letterMatcherCount: 3},
        ]}/>
      </ViewContainer>
    )
  }
}
