import React, {useState} from 'react';
import {
  TextInput,
  TextInputProps,
  Animated,
  Easing,
  StyleSheet,
  TextProps,
  View,
} from 'react-native';
import {COLORS, FONTS, scale, scaleHeight} from '../../../constants';
import globalStyles from '../../../styles';
import {CalendarSvg} from '../../svgs';
import Modal from '../../modal';
import DatePickerModal from '../../calendar';

interface InputProps {
  label?: string;
  titleActiveSize?: number;
  titleActiveColor?: string;
  textInputProps: TextInputProps;
  labelProps: TextProps;

  onDateChanged: (date: string) => void;
}

const DatePicker = ({
  label = 'Date Of Birth',
  titleActiveSize = scale(10),
  titleActiveColor = COLORS.TEAL,

  textInputProps: {style: textInputstyle, ...textInputProps},
  labelProps: {style: labelStyle, ...labelProps},
  onDateChanged,
}: InputProps) => {
  const ref = React.useRef<TextInput | null>(null);
  const animatedValue = React.useRef(new Animated.Value(0));
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState<string | undefined>(
    '',
  );

  const handleDateChange = (input: string) => {
    // Remove non-numeric characters
    const numericInput = input.replace(/\D/g, '');

    // Format the numeric input as 'yyyy-MM-dd'
    if (numericInput.length > 0) {
      let formattedDateString = numericInput;
      if (numericInput.length >= 4) {
        formattedDateString = `${numericInput.slice(0, 4)}-${numericInput.slice(
          4,
          6,
        )}`;
      }
      if (numericInput.length >= 6) {
        formattedDateString = `${formattedDateString}-${numericInput.slice(
          6,
          8,
        )}`;
      }
      selectedDate && onDateChanged(selectedDate);
      setSelectedDate(formattedDateString);
    } else {
      setSelectedDate('');
    }
  };

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
      <View
        style={[
          globalStyles.row,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <TextInput
          ref={ref}
          style={styles.textInput}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder="Choose Date"
          placeholderTextColor={COLORS.GRAY[250]}
          onChangeText={handleDateChange}
          value={selectedDate}
          {...textInputProps}
        />
        <CalendarSvg onPress={() => setModalVisible(true)} />
      </View>

      <Modal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}>
        <DatePickerModal
          closeModal={_selectedDate => {
            setModalVisible(false);
            handleDateChange(_selectedDate);
          }}
        />
      </Modal>
    </Animated.View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  subContainer: {
    height: scaleHeight(55),
    borderRadius: scale(5),
    borderColor: COLORS.GRAY[200],
    paddingRight: scale(35),
    paddingLeft: scale(20),
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
  },
  label: {
    fontFamily: FONTS.DM_SANS_BOLD,
    position: 'absolute',
  },
  textInput: {
    fontSize: scale(16),
    fontFamily: FONTS.DM_SANS_BOLD,
    color: COLORS.TEXT_DARK,
    width: '100%',
  },
});
