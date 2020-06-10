import React from 'react';
import {CounterNumberScreenStyles} from './styles';

interface State {
  counter?: number;
  hasError?: boolean;
}


export class CounterNumberScreen extends React.Component<State> {
  state = {
    counter: 0,
    hasError: false,
  };

  changeValue = (type: "add" | "decrease") => {
    if(type === "add") {
      const [counter, hasError] = [this.state.counter + 1, false]
      this.setState({counter, hasError})
    }

    else if(this.state.counter === 0) {
      const [counter, hasError] = [this.state.counter, true]
      this.setState({counter, hasError})
    }

    else {
      const [counter, hasError] = [this.state.counter - 1, false]
      this.setState({counter, hasError})
    }
  }

  render() {
    const {
      View, TextNumber, ViewButtons,
      TextError, AddButton, DecreaseButton, TextTouchableOpacity
    } = CounterNumberScreenStyles;

    return (
      <View>
        <TextNumber>Meu valor: {this.state.counter}</TextNumber>
        <ViewButtons>
          <AddButton onPress={() => this.changeValue("add")}>
            <TextTouchableOpacity>
              ADD
            </TextTouchableOpacity>
          </AddButton>
          <DecreaseButton onPress={() => this.changeValue("decrease")}>
            <TextTouchableOpacity>
              DECREASE
            </TextTouchableOpacity>
          </DecreaseButton>
        </ViewButtons>
        {
          this.state.hasError && (
            <TextError>
              The counter can't go below zero
            </TextError>
          )
        }
      </View>
    );

  }

}
