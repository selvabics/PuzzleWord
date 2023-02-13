import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PuzzleScreen from '../screens/PuzzleScreen';
import LeaderBoardScreen from '../screens/LeaderBoardScreen';
import { navigationRef } from './navigation';

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createNativeStackNavigator();

const hideHeader = {
  header: () => null,

};

const Routers = () => {
  return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={hideHeader}
          name="splashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={hideHeader}
          name="loginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={hideHeader}
          name="homeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={hideHeader}
          name="puzzleScreen"
          component={PuzzleScreen}
        />
        <Stack.Screen
          options={hideHeader}
          name="leaderBoardScreen"
          component={LeaderBoardScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
