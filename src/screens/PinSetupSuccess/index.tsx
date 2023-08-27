import React from 'react';
import {SuccessScreen} from '../../components';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack';
import {ProtectedStackNavigator} from '../../navigation/protectedNavigation';

type PinSetupScreenNavigationProp = NativeStackNavigationProp<
  ProtectedStackNavigator,
  'PinSetupSuccess'
>;

type Props = {
  navigation: PinSetupScreenNavigationProp;
};

const PinSetupSuccess = ({navigation}: Props) => {
  return (
    <SuccessScreen
      title={'You’ve created your PIN'}
      subText={
        'Keep your account safe with your \n secret PIN. Do not share this PIN \n with anyone.'
      }
      onPress={() =>
        navigation.navigate('ProtectedBottomTabs', {screen: 'Home'})
      }
    />
  );
};

export default PinSetupSuccess;
