import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';

import styles from '../PinSetup/styles';
import globalStyles from '../../styles';
import {NumberPad, PinInput} from '../../components';
import {NativeStackNavigationProp} from 'react-native-screens/lib/typescript/native-stack';
import {ProtectedStackNavigator} from '../../navigation/protectedNavigation';
import {scale} from '../../constants';

type PinSetupScreenRouteProp = NativeStackNavigationProp<
  ProtectedStackNavigator,
  'ConfirmPin'
>;

type ConfirmPinScreenRouteProp = RouteProp<
  ProtectedStackNavigator,
  'ConfirmPin'
>;

type Props = {
  navigation: PinSetupScreenRouteProp;
  route: ConfirmPinScreenRouteProp;
};

const PinSetup = ({navigation, route}: Props) => {
  const codeLength = 6;
  const [pin, setPin] = useState('');
  const [misMatch, setMismatch] = useState(false);

  useEffect(() => {
    if (pin.length === codeLength && route.params.pin !== pin)
      setMismatch(true);
    else if (pin.length === codeLength && route.params.pin === pin) {
      setMismatch(false);
      navigation.navigate('PinSetupSuccess');
    }
  }, [pin]);
  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            gap: scale(11),
            paddingBottom: scale(11),
          }}>
          <Text style={globalStyles.heading}>Confirm 6-digit PIN</Text>
          <Text style={globalStyles.subHeading}>
            You’ll use this PIN to sign in and confirm transactions
          </Text>
        </View>
        <PinInput onInput={setPin} pin={pin} secure misMatch={misMatch} />
      </View>
      <NumberPad setVal={setPin} valLength={codeLength} />
    </View>
  );
};

export default PinSetup;
