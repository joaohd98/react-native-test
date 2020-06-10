import styled from 'styled-components/native';
import {TextProps, TouchableOpacityProps, ViewProps} from 'react-native';

export const CounterNumberScreenStyles = {
  View: styled.View<ViewProps>`
    height: 100%;
    justify-content: center;
    align-items: center;
  `,
  TextNumber: styled.Text<TextProps>`
    font-size: 32px;
  `,
  ViewButtons: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
  `,
  AddButton: styled.TouchableOpacity<TouchableOpacityProps>`
     background-color: greenyellow;
     padding-vertical: 10px;
     margin: 30px 5px;
     width: 125px;
  `,
  DecreaseButton: styled.TouchableOpacity<TouchableOpacityProps>`
     background-color: greenyellow;
     padding-vertical: 10px;
     margin: 30px 5px;
     width: 125px;
  `,
  TextTouchableOpacity: styled.Text<TextProps>`
     font-size: 15px;
     text-align: center;
  `,
  TextError: styled.Text<TextProps>`
    margin-vertical: 20px
  `,
}
