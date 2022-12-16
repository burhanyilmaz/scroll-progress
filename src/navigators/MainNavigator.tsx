import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import HomeScreen from 'screens/HomeScreen';
import TestScreen from 'screens/TestScreen';

const Stack = createNativeStackNavigator();

export type MainNavigatorParamList = {
  Home: undefined;
  Test: undefined;
};

const commonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={commonOptions} />
      <Stack.Screen name="Test" component={TestScreen} options={commonOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
