import {StyleSheet} from 'react-native';
import {COLORS, scale} from '../../../constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: scale(13),
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  input: {
    borderRadius: scale(5),
    borderColor: COLORS.GRAY[200],
    borderWidth: 1,
    padding: scale(10),
    textAlign: 'center',
  },
  inputActive: {
    borderColor: COLORS.TEAL,
  },
  inputError: {
    borderColor: COLORS.ORANGE,
  },
});
