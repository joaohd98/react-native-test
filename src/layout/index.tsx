import React from 'react';
import {View, StatusBar, SafeAreaView} from 'react-native';
import {CounterNumberScreen,} from '../screens/count-number';

export const Layout = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View>
      <SafeAreaView>
        <CounterNumberScreen/>
      </SafeAreaView>
    </View>
  </>
);

