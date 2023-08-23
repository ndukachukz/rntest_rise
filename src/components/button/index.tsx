import React, {ReactNode} from 'react';

import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TextProps,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, scale, scaleHeight} from '../../constants';

interface Props {
  title?: string;
  touchableProps: TouchableOpacityProps;
  textProps: TextProps;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Button = ({
  title,
  touchableProps: {style: containerStyle, ...touchableProps},
  textProps: {style: textStyle, ...textProps},
  iconLeft,
  iconRight,
}: Props) => {
  return (
    <TouchableOpacity
      {...touchableProps}
      style={[
        styles.container,
        containerStyle,
        touchableProps.disabled && {backgroundColor: COLORS.TEAL_DISABLED},
      ]}>
      {iconLeft}
      {title && (
        <Text {...textProps} style={[styles.buttonText, textStyle]}>
          {title}
        </Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: scaleHeight(48),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: scale(15),
    borderRadius: scale(5),
    gap: scale(16),
    backgroundColor: COLORS.TEAL,
  },
  buttonText: {
    fontFamily: FONTS.DM_SANS_BOLD,
    fontSize: scale(15),
    color: COLORS.WHITE,
  },
});
