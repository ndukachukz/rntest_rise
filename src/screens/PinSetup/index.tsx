import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import globalStyles from '../../styles';
import {NumberPad, PinInput} from '../../components';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack';
import {ProtectedStackNavigator} from '../../navigation/protectedNavigation';
import {scale} from '../../constants';

type PinSetupScreenProps = NativeStackNavigationProp<
  ProtectedStackNavigator,
  'PinSetup'
>;

type Props = {
  navigation: PinSetupScreenProps;
};

const PinSetup = ({navigation}: Props) => {
  const codeLength = 6;
  const [pin, setPin] = useState('');
  const [key, setKey] = useState<React.ReactNode | string>('');

  useEffect(() => {
    pin.length === codeLength && navigation.navigate('ConfirmPin', {pin});
  }, [pin]);
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            gap: scale(11),
            paddingBottom: scale(11),
          }}>
          <Text style={globalStyles.heading}>Create a 6-digit PIN</Text>
          <Text style={globalStyles.subHeading}>
            You’ll use this PIN to sign in and confirm transactions
          </Text>
        </View>
        <PinInput onInput={setPin} pin={pin} secure />
      </View>
      <NumberPad setVal={setPin} valLength={codeLength} />
    </View>
  );
};

export default PinSetup;
