import React from 'react';
import {
  TextInput,
  TextInputProps,
  Animated,
  Easing,
  StyleSheet,
  TextProps,
  ViewStyle,
} from 'react-native';
import {COLORS, FONTS, scale, scaleHeight} from '../../../constants';
import {HidePassSvg} from '../../svgs';

interface InputProps {
  label?: string;
  titleActiveSize?: number;
  titleInActiveSize?: number;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  iconLeft?: (props: Omit<TextInputProps, 'style'>) => React.JSX.Element;
  iconRight?: (props: Omit<TextInputProps, 'style'>) => React.JSX.Element;
  textInputProps: TextInputProps;
  labelProps: TextProps & {translateX?: number; inactiveTranslateX?: number};
  containerStyle?: ViewStyle;
}

const Input = ({
  label = 'New Title',
  titleActiveSize = scale(10),
  titleInActiveSize = scale(15),
  titleActiveColor = COLORS.TEAL,
  titleInactiveColor = COLORS.DARK_TEXT,
  iconLeft,
  iconRight,
  textInputProps: {style: textInputstyle, ...textInputProps},
  labelProps: {
    style: labelStyle,
    translateX = 10,
    inactiveTranslateX = 0,
    ...labelProps
  },
  containerStyle,
}: InputProps) => {
  const ref = React.useRef<TextInput | null>(null);
  const animatedValue = React.useRef(new Animated.Value(0));

  const returnAnimatedLabelStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -26],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [inactiveTranslateX, translateX],
          extrapolate: 'clamp',
        }),
      },
    ],
    fontSize: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInActiveSize, titleActiveSize],
      extrapolate: 'clamp',
    }),
    color: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [titleInactiveColor, titleActiveColor],
    }),
    paddingHorizontal: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [scale(10), scale(13)],
    }),

    backgroundColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: ['transparent', COLORS.WHITE],
      extrapolate: 'clamp',
    }),
  };

  const viewStyles = {
    borderColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [COLORS.GRAY[300], titleActiveColor],
    }),
    borderWidth: 0.8,
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!textInputProps.value) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 500,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <Animated.View style={[styles.subContainer, viewStyles, containerStyle]}>
      {iconLeft && iconLeft(textInputProps)}
      <Animated.Text
        style={[styles.label, returnAnimatedLabelStyles]}
        {...labelProps}
        onPress={() => ref.current?.focus()}>
        {label}
      </Animated.Text>
      <TextInput
        style={styles.textInput}
        onBlur={onBlur}
        onFocus={onFocus}
        {...textInputProps}
      />
      {iconRight && iconRight(textInputProps)}
    </Animated.View>
  );
};

export default Input;

const styles = StyleSheet.create({
  subContainer: {
    height: scaleHeight(55),
    borderRadius: scale(5),
    borderColor: COLORS.GRAY[200],
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONTS.DM_SANS_BOLD,
    position: 'absolute',
  },
  textInput: {
    width: '100%',
    fontSize: scale(16),
  },
});
