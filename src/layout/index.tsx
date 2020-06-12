import React from 'react';
import {StatusBar} from 'react-native';
import {CounterNumberScreen,} from '../screens/count-number';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {GuessWordScreen} from '../screens/guess-word';
import { Provider } from 'react-redux';
import {createdStore} from '../redux/config-store';

const Stack = createStackNavigator();

export const Layout = () => (
  <Provider store={createdStore}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen name="GuessWordScreen" component={GuessWordScreen} />
        <Stack.Screen name="CountNumber" component={CounterNumberScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

);
