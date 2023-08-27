import {StyleSheet} from 'react-native';
import {BASE_HORIZONTAL_PADDING, COLORS, FONTS, scale} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'space-between',
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    paddingTop: scale(75),
    paddingBottom: scale(50),
  },
  textContainer: {
    marginVertical: scale(35),
    gap: scale(20),
  },
  check: {
    width: scale(90),
    height: scale(90),
    borderRadius: scale(50),
    backgroundColor: 'rgba(113, 135, 156, 0.10)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.TEXT_DARK,
    fontFamily: FONTS.GROTESK_SEMI_BOLD,
    fontSize: scale(20),
    textAlign: 'center',
    lineHeight: scale(26),
  },
  subText: {
    color: COLORS.SOFT_TECT,
    fontSize: scale(15),
    lineHeight: scale(22),
    textAlign: 'center',
  },
});
