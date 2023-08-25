import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {Home} from '../screens';

const Stack = createNativeStackNavigator<ProtectedStackNavigator>();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* TODO: have the bottom tab as the initial screen */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
