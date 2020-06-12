import styled from 'styled-components/native';
import {Animated, TextProps, ViewProps} from 'react-native';

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
  ViewTitleGuessed: styled.View<ViewProps>`
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
    color: #000;
    background-color: #F8F8F8;
    font-weight: 500;
  `,
  TitleGuessed: styled.Text<TextProps>`
    width: 50%;
    padding: 20px 15px;
    color: #888888;
    background-color:  #FFF;
    font-weight: bold;
  `
}
