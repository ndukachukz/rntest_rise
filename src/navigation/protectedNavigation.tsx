import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import ProtectedBottomTabs from './protectedBottomTabs';
import {PinSetup, ConfirmPin} from '../screens';
import PinSetupSuccess from '../screens/PinSetupSuccess';

export type ProtectedStackNavigator = {
  ProtectedBottomTabs: NavigatorScreenParams<ProtectedBottomTabsNavigator>;
  PinSetup: undefined;
  ConfirmPin: {pin: string};
  PinSetupSuccess: undefined;
};

const Stack = createNativeStackNavigator<ProtectedStackNavigator>();

const ProtectedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ProtectedBottomTabs"
        component={ProtectedBottomTabs}
      />
      {/* TODO: available only on first login */}
      <Stack.Screen name="PinSetup" component={PinSetup} />
      <Stack.Screen name="ConfirmPin" component={ConfirmPin} />
      <Stack.Screen name="PinSetupSuccess" component={PinSetupSuccess} />
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
