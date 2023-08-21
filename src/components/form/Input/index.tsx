import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
}

const Input = ({label}: InputProps) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
};

export default Input;
