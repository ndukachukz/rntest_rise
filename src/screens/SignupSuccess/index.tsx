import React from 'react';

import {SuccessScreen} from '../../components';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  PublicStackNavigator,
  'SignupSuccess'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SignupSuccess = ({navigation}: Props) => {
  return (
    <SuccessScreen
      title={'You just created your \n Rise account'}
      subText={'Welcome to Rise, let’s take \n you home'}
      onPress={() => navigation.navigate('SignIn')}
    />
  );
};

export default SignupSuccess;
