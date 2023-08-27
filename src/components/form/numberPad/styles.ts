import {StyleSheet} from 'react-native';
import {COLORS, FONTS, scale} from '../../../constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: scale(35),
    marginBottom: scale(24),
  },
  key: {
    width: scale(72),
    height: scale(72),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(50),
    backgroundColor: COLORS.GRAY[100],
  },
  keyText: {
    fontSize: scale(30),
    color: COLORS.TEAL,
    fontFamily: FONTS.GROTESK_SEMI_BOLD,
  },
});
