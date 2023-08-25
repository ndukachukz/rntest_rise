import {StyleSheet} from 'react-native';
import {BASE_HORIZONTAL_PADDING, COLORS, FONTS, scale} from '../../constants';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    backgroundColor: COLORS.WHITE,
    gap: scale(38),
  },
  textContainer: {
    gap: scale(11),
  },
  formContainer: {
    gap: scale(15),
    paddingVertical: scale(5),
  },
  passRuleContainer: {
    gap: scale(12),
    marginVertical: scale(15),
  },
  passRule: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(8),
  },
  passRuleText: {
    fontFamily: FONTS.DM_SANS,
    color: COLORS.DARK_TEXT,
    fontSize: scale(13),
  },
  passRuleCheckContainer: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLORS.TEAL,
    width: scale(16),
    height: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerText: {
    fontFamily: FONTS.DM_SANS,
    fontSize: scale(15),
    color: COLORS.SOFT_TECT,
    textAlign: 'center',
  },
});

export default styles;
