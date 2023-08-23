import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {format} from 'date-fns';
import {Calendar, CalendarProps, DateData} from 'react-native-calendars';

import {COLORS, FONTS, scale, scaleHeight} from '../../constants';
import styles from './styles';

interface DayComponentProps {
  date: (string & DateData) | undefined;
  state?: 'selected' | 'disabled' | 'inactive' | 'today' | '';
  onPress: ((date?: DateData | undefined) => void) | undefined;
  selectedDate?: string;
}

const DayComponent = ({
  date,
  state,
  onPress,
  selectedDate,
}: DayComponentProps) => {
  const selected = selectedDate === date?.dateString;
  return (
    <View
      style={[styles.dayContainer, selected && styles.dayContainerSelected]}>
      <Text
        onPress={() => {
          onPress && onPress(date);
        }}
        style={[styles.day, selected && styles.selectedDay]}>
        {date?.day}
      </Text>
    </View>
  );
};

interface Props {
  calendarProps?: CalendarProps;
  modalVisible?: boolean;
  closeModal(params: string): void;
}

const DatePickerModal = ({calendarProps, modalVisible, closeModal}: Props) => {
  const [selected, setSelected] = React.useState<string>('');

  // Calculate the minimum birth date for an 18-year-old person
  const currentDate = new Date();
  const minBirthDate = new Date();
  minBirthDate.setFullYear(currentDate.getFullYear() - 18);

  // Set the maximum birth date to today (no one can be born in the future)
  const maxBirthDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <View style={styles.datePickerContainer}>
      <Calendar
        minDate={format(minBirthDate, 'yyyy-MM-dd')}
        maxDate={maxBirthDate}
        style={{
          padding: 0,
          margin: 0,
        }}
        onDayPress={date => {
          setSelected(date.dateString);
        }}
        theme={{
          // @ts-ignore
          'stylesheet.calendar.header': {
            dayHeader: {
              fontSize: scale(15),
              color: COLORS.TEXT_DARK,
              fontFamily: FONTS.GROTESK_BOLD,
            },
          },
        }}
        renderHeader={date => (
          <Text style={styles.header}>
            {format(new Date(date), 'MMM dd yyyy')}
          </Text>
        )}
        dayComponent={props => (
          <DayComponent
            date={props.date}
            onPress={props.onPress}
            state={props.state}
            selectedDate={selected}
          />
        )}
        enableSwipeMonths
        {...calendarProps}
      />
      <View style={styles.datePickerFooter}>
        <Text
          onPress={() => closeModal(selected)}
          style={[styles.footerText, {color: COLORS.TEAL}]}>
          Done
        </Text>
        <Text
          onPress={() => closeModal(selected)}
          style={[styles.footerText, {color: COLORS.ORANGE}]}>
          Cancel
        </Text>
      </View>
    </View>
  );
};

export default DatePickerModal;
