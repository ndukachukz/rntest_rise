import {StyleSheet} from 'react-native';
import {
  BASE_HORIZONTAL_PADDING,
  COLORS,
  FONTS,
  scale,
  scaleHeight,
  width,
} from '../../constants';

export default StyleSheet.create({
  slideContainer: {
    width,
    justifyContent: 'space-evenly',
    paddingTop: scale(70),
    paddingBottom: scale(30),
  },
  image: {
    width: scale(300),
    height: scaleHeight(300),
    alignSelf: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  dot: {
    backgroundColor: COLORS.OFF_WHITE,
    height: scaleHeight(9),
    width: scale(9),
    borderRadius: 25,
  },
  dotActive: {
    height: scaleHeight(9),
  },
  textContentContainer: {
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    gap: scale(12),
  },
  title: {
    fontFamily: FONTS.GROTESK_SEMI_BOLD,
    fontSize: scale(20),
  },
  subTitle: {
    fontFamily: FONTS.DM_SANS,
    fontSize: scale(15),
    color: COLORS.TEXT_DARK,
    lineHeight: scale(22),
  },
  buttonRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
  },
  buttonColContainer: {
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    gap: scale(16),
  },
});
