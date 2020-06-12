import React from 'react';
import {GuessWordScreenCongrats} from './components/congrats';
import {GuessWordScreenGame} from './components/game';
import {Text, View} from 'react-native';

export class GuessWordScreen extends React.PureComponent {
  render() {
    return (
      <View>
        <Text>
          Jotto
        </Text>
        <GuessWordScreenCongrats success={false} />
        <GuessWordScreenGame guessedWords={[]} />
      </View>
    )
  }
}
