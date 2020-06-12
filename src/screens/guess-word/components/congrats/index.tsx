import React from 'react';
import {GuessWordScreenCongratsStyles} from './styles';

export interface GuessWordScreenCongratsProps {
  success?: boolean;
}

export class GuessWordScreenCongrats extends React.Component<GuessWordScreenCongratsProps> {
  render() {

    const {View, Text} = GuessWordScreenCongratsStyles;

    return (
      <View>
        { this.props.success &&  <Text>YOU ARE RIGHT!!!!!</Text> }
      </View>
    );
  }
}
