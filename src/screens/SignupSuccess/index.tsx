import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';
import {Button, CheckRoundedSvg} from '../../components';

const SignupSuccess = () => {
  return (
    <View style={styles.container}>
      <View>
        <CheckRoundedSvg />
        <Text>You just created your {' \n '} Rise account</Text>
        <Text>Welcome to Rise, let’s take {'\n'} you home</Text>
      </View>
      <Button title="Okay" textProps={{}} touchableProps={{}} />
    </View>
  );
};

export default SignupSuccess;
