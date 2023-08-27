import {StyleSheet} from 'react-native';
import {BASE_HORIZONTAL_PADDING, COLORS, scale} from '../../constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    backgroundColor: COLORS.WHITE,
    paddingVertical: scale(79),
  },
});
