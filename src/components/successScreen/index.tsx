import {View, Text} from 'react-native';
import React from 'react';

import styles from './styles';
import {Button, CheckSvg} from '../../components';

type Props = {
  title: string;
  subText: string;
  onPress: () => void;
};

const SuccessScreen = ({title, subText, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.check}>
          <CheckSvg />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subText}>{subText}</Text>
        </View>
      </View>
      <Button
        title="Okay"
        textProps={{}}
        touchableProps={{
          onPress,
        }}
      />
    </View>
  );
};

export default SuccessScreen;
