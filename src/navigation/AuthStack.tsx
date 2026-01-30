import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
