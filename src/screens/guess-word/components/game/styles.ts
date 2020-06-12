import styled from 'styled-components/native';
import {TextProps, ViewProps} from 'react-native';

export const GuessWordScreenGameStyles = {
  Container: styled.View<ViewProps>`
    flex: 1;
  `,
  TextInstructions: styled.Text<TextProps>`
    font-size: 22px;
  `,
  ViewGuessedContainer: styled.View<ViewProps>`  `,
  ViewGuessed: styled.View<ViewProps>`
    display: flex;
    flex-direction: row;
  `,
  TextTitleGuessed: styled.Text<TextProps>`
    font-size: 18px;
    width: 50%;
    font-weight: bold;
    padding-horizontal: 10px;
  `,
  TextGuessed: styled.Text<TextProps & {isTitle?: boolean}>`
    width: 50%;
    padding: 20px 15px;
    color: ${({isTitle}) => isTitle ? "#888888" : "#000"};
    background-color: ${({isTitle}) => isTitle ? "#FFF" : "#F8F8F8"};
    font-weight: ${({isTitle}) => isTitle ? "bold" : '500'};
  `,
}
