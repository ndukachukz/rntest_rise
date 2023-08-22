import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Onboarding from '../screens/Onboarding';

const Stack = createNativeStackNavigator<PublicStackNavigator>();

const PublicNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default PublicNavigator;
