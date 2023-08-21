import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {ProtectedNavigation, PublicNavigation} from '.';

const AppNavigation = () => {
  const [user] = useState(null);
  return (
    <NavigationContainer>
      <PublicNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
