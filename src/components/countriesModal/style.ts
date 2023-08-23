import {StyleSheet} from 'react-native';
import {
  BASE_HORIZONTAL_PADDING,
  COLORS,
  FONTS,
  scale,
  width,
} from '../../constants';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    width: scale(width / 1.15),
    borderRadius: 12,
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  searchContainer: {
    alignItems: 'center',
    marginVertical: scale(5),
  },
  country: {
    fontFamily: FONTS.GROTESK_SEMI_BOLD,
    fontSize: scale(16),
    lineHeight: scale(30),
  },
});
