import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {scale, width} from '../../../constants';

interface Props {
  codeLength?: number;
  pin: string;
  secure?: boolean;
  onInput: (value: string) => void;
  misMatch?: boolean;
}

const PinInput = ({codeLength = 6, pin = '', misMatch}: Props) => {
  return (
    <View style={styles.container}>
      {Array.from({length: codeLength}).map((val, index) => (
        <Text
          key={`[pin-${index}`}
          style={[
            {
              width: scale(
                (width - (codeLength - 1) * scale(24) - 2 * scale(5)) /
                  codeLength,
              ),
              height: scale(
                (width - (codeLength - 1) * scale(24) - 2 * scale(5)) /
                  codeLength,
              ),
            },
            styles.input,
            pin.length === index && styles.inputActive,
            misMatch && styles.inputError,
          ]}>
          {pin[index] || ''}
        </Text>
      ))}
    </View>
  );
};

export default PinInput;
