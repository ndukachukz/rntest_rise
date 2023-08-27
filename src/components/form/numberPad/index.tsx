import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {NumberPadDelSvg} from '../../svgs';

interface NumberPadProps {
  setVal: React.Dispatch<React.SetStateAction<string>>;
  valLength: number;
}

const NumberPad: React.FC<NumberPadProps> = ({setVal, valLength}) => {
  const keypadLayout = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['.', '0', <NumberPadDelSvg />],
  ];

  const handleKeyPress = (key: string | React.ReactNode) => {
    // delete last string if key type is node
    // append . if key is .

    if (typeof key !== 'string') {
      // Delete the last character
      setVal(val => val.slice(0, -1));
    } else if (key === '.') {
      // Append a dot if not already present
      setVal(val => val + '.');
    } else {
      setVal(val => val + key);
    }
  };

  return (
    <View style={styles.container}>
      {keypadLayout.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((key, keyIndex) => (
            <TouchableOpacity
              key={`key-${keyIndex}`}
              style={styles.key}
              onPress={() => handleKeyPress(key)}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

export default NumberPad;
