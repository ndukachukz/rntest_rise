import React, {PropsWithChildren} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ViewStyle,
  StyleProp,
} from 'react-native';
import {scale} from '../../../constants';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const FormContainer = ({children, style}: Props) => {
  return (
    <KeyboardAvoidingView
      behavior="height"
      keyboardVerticalOffset={Platform.OS === 'ios' ? scale(64) : 0}
      style={[{flex: 1}, style]}>
      {children}
    </KeyboardAvoidingView>
  );
};

export default FormContainer;
