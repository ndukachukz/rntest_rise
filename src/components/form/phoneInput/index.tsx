import React from 'react';
import {
  TextInput,
  TextInputProps,
  Animated,
  Easing,
  StyleSheet,
  TextProps,
  View,
  Pressable,
  Text,
} from 'react-native';
import {Path, Svg} from 'react-native-svg';

import CountriesModal from '../../countriesModal';
import globalStyles from '../../../styles';
import {COLORS, FONTS, scale, scaleHeight, width} from '../../../constants';

interface InputProps {
  label?: string;
  titleActiveSize?: number;
  titleInActiveSize?: number;
  titleActiveColor?: string;
  titleInactiveColor?: string;
  textInputProps: TextInputProps;
  labelProps: TextProps;
  selectedDialCode?: (params: string) => void;
  onChangeText: (text: string) => void;
}

const ChevronDown = () => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M6 9.25L12 15.25L18 9.25"
        stroke="#8B9EAB"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

const PhoneInput = ({
  label = 'Phone Number',
  titleActiveSize = scale(10),
  titleActiveColor = COLORS.TEAL,

  textInputProps: {style: textInputstyle, ...textInputProps},
  labelProps: {style: labelStyle, ...labelProps},
  onChangeText,
  selectedDialCode,
}: InputProps) => {
  const ref = React.useRef<TextInput | null>(null);
  const animatedValue = React.useRef(new Animated.Value(0));

  const [countryModalVisible, setCountryModalVisible] = React.useState(false);

  const [dialCode, setDialCode] = React.useState({
    name: 'Nigeria',
    flag: '🇳🇬',
    code: 'NG',
    dial_code: '+234',
  });

  const returnAnimatedLabelStyles = {
    transform: [
      {
        translateY: -26,
      },
      {
        translateX: 10,
      },
    ],
    fontSize: titleActiveSize,
    color: titleActiveColor,
    paddingHorizontal: scale(13),

    backgroundColor: COLORS.WHITE,
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
    <Animated.View style={[styles.subContainer, viewStyles]}>
      <Animated.Text
        style={[styles.label, returnAnimatedLabelStyles]}
        {...labelProps}
        onPress={() => ref.current?.focus()}>
        {label}
      </Animated.Text>
      <View style={[globalStyles.row, {alignItems: 'center'}]}>
        <Pressable
          onPress={() => setCountryModalVisible(true)}
          style={[
            globalStyles.row,
            {
              gap: 10,
              borderRightWidth: 1,
              borderRightColor: COLORS.GRAY[250],
              paddingRight: 10,
            },
          ]}>
          <Text>{dialCode.flag}</Text>
          <Text
            style={{
              color: COLORS.DARK_TEXT,
              fontFamily: FONTS.GROTESK_REGULAR,
              fontSize: scale(16),
            }}>
            {dialCode.dial_code}
          </Text>
          <ChevronDown />
        </Pressable>
        <TextInput
          style={styles.textInput}
          onBlur={onBlur}
          onFocus={onFocus}
          {...textInputProps}
          onChangeText={text => onChangeText(dialCode.dial_code + text)}
        />
      </View>
      <CountriesModal
        modalVisible={countryModalVisible}
        setModalVisible={setCountryModalVisible}
        onSelect={country => {
          setDialCode(country);
          selectedDialCode && selectedDialCode(country.dial_code);
        }}
      />
    </Animated.View>
  );
};

export default PhoneInput;

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
    width: scale(width / 1.7),
    fontSize: scale(16),
    fontFamily: FONTS.GROTESK_REGULAR,
  },
});
