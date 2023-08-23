import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useAppSelector} from '../hooks';

const Stack = createNativeStackNavigator<ProtectedStackNavigator>();

const ProtectedNavigator = () => {
  const app = useAppSelector(state => state.app);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <></>
    </Stack.Navigator>
  );
};

export default ProtectedNavigator;
