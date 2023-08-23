import {StyleSheet} from 'react-native';
import {COLORS, FONTS, scale} from '../constants';

export default StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  heading: {
    fontFamily: FONTS.GROTESK_BOLD,
    fontSize: scale(20),
    color: COLORS.TEXT_DARK,
  },
  subHeading: {
    fontFamily: FONTS.DM_SANS,
    fontSize: scale(15),
    lineHeight: scale(22),
    color: COLORS.GRAY[300],
  },
  inputError: {
    fontFamily: FONTS.DM_SANS,
    color: COLORS.ORANGE,
    paddingTop: scale(5),
  },
  row: {flexDirection: 'row'},
  activeLabelStyles: {
    transform: [
      {
        translateY: -26,
      },
      {
        translateX: 10,
      },
    ],
    fontSize: COLORS.TEAL,
    color: scale(10),
    paddingHorizontal: scale(13),

    backgroundColor: COLORS.WHITE,
  },
});
