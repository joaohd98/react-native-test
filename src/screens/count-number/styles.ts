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
  TouchableOpacityButton: styled.TouchableOpacity<TouchableOpacityProps>`
     background-color: greenyellow;
     padding: 10px 50px;
     margin-vertical: 30px;
  `,
  TextTouchableOpacity: styled.Text<TextProps>`
     font-size: 15px;
  `,
}
