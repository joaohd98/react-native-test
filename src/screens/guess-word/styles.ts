import styled from 'styled-components/native';
import {TextProps, ViewProps} from 'react-native';

export const GuessWordScreenStyles = {
  ViewContainer: styled.View<ViewProps>`
    flex: 1;
    margin-horizontal: 30px
  `,
  TextTitle: styled.Text<TextProps>`
     margin-vertical: 30px;
     font-size: 32px;
  `,
}
