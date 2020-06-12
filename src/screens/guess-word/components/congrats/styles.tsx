import 'react-native';
import React from 'react';

import {shallow} from 'enzyme';
import {GuessWordScreenCongrats, GuessWordScreenCongratsProps} from './index';
import {findByComponent} from '../../../../helpers/test';
import styled from 'styled-components/native';
import {TextProps, ViewProps} from 'react-native';

export const GuessWordScreenCongratsStyles = {
  View: styled.View<ViewProps>``,
  Text: styled.Text<TextProps>`
    color: #155724;
    font-weight: 600;
    padding: 15px;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    margin-bottom: 30px;
  `
}
