import React from 'react';
import {CounterNumberScreenStyles} from './styles';

interface State {
  counter?: number;
}


export class CounterNumberScreen extends React.Component<State> {
  state = {
    counter: 0
  };

  addValue = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
    const {View, TextNumber, TouchableOpacityButton, TextTouchableOpacity} = CounterNumberScreenStyles;

    return (
      <View>
        <TextNumber>Meu valor: {this.state.counter}</TextNumber>
        <TouchableOpacityButton onPress={this.addValue}>
          <TextTouchableOpacity>
            ADD
          </TextTouchableOpacity>
        </TouchableOpacityButton>
      </View>
    );

  }

}
