import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';
import {Button, CheckSvg} from '../../components';
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
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.check}>
          <CheckSvg />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            You just created your {' \n '} Rise account
          </Text>
          <Text style={styles.subText}>
            Welcome to Rise, let’s take {'\n'} you home
          </Text>
        </View>
      </View>
      <Button
        title="Okay"
        textProps={{}}
        touchableProps={{
          onPress: () => {
            navigation.navigate('SignIn');
          },
        }}
      />
    </View>
  );
};

export default SignupSuccess;
