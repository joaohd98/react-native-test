import 'react-native';
import React from 'react';

import {shallow} from 'enzyme';
import {GuessWordScreenCongrats, GuessWordScreenCongratsProps} from './index';
import {findByComponent} from '../../../../helpers/test-helpers';
import styled from 'styled-components/native';
import {TextProps, ViewProps} from 'react-native';

export const GuessWordScreenCongratsStyles = {
  View: styled.View<ViewProps>`

  `,
  Text: styled.Text<TextProps>`

  `
}
