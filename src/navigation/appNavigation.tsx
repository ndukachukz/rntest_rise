import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ProtectedNavigation, PublicNavigation} from '.';
import SplashScreen from '../screens/Splash';
import {useAppSelector} from '../hooks';

const AppNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);
  const authToken = useAppSelector(state => state.auth.token);

  setTimeout(() => {
    setShowSplash(false);
  }, 5000);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {authToken ? <ProtectedNavigation /> : <PublicNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
