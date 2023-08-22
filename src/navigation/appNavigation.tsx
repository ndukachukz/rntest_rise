import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {ProtectedNavigation, PublicNavigation} from '.';
import SplashScreen from '../screens/Splash';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [user] = useState(null);

  setTimeout(() => {
    setShowSplash(false);
  }, 5000);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <PublicNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
