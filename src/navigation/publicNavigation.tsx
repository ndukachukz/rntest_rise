import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {
  OnboardingScreen,
  ProfileSetup,
  SignupScreen,
  SignupSuccess,
} from '../screens';

const Stack = createNativeStackNavigator<PublicStackNavigator>();

const PublicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="SignupSuccess" component={SignupSuccess} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
