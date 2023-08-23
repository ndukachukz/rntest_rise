import {StyleSheet} from 'react-native';
import {COLORS, scale} from '../../constants';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 15,
    shadowColor: COLORS.TEXT_DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: scale(300),
  },
});

export default styles;
