import {StyleSheet} from 'react-native';
import {COLORS, FONTS, scale, scaleHeight} from '../../constants';

const styles = StyleSheet.create({
  datePickerContainer: {
    backgroundColor: COLORS.WHITE,
    width: scale(343),
    borderRadius: 12,
  },
  datePickerFooter: {
    flexDirection: 'row',
    marginVertical: scale(10),
    gap: scale(15),
    marginLeft: scale(21.5),
  },
  footerText: {
    fontFamily: FONTS.GROTESK_BOLD,
    fontSize: scale(13),
    lineHeight: scale(18),
  },
  header: {
    fontFamily: FONTS.GROTESK_BOLD,
    color: COLORS.TEXT_DARK,
  },
  dayContainer: {
    width: scale(38),
    height: scaleHeight(30),
    justifyContent: 'center',
  },
  dayContainerSelected: {
    backgroundColor: COLORS.TEAL,
    borderRadius: scale(8),
  },
  day: {
    fontSize: scale(15),
    fontFamily: FONTS.GROTESK_REGULAR,
    textAlign: 'center',
  },
  selectedDay: {
    color: COLORS.WHITE,
  },
});

export default styles;
