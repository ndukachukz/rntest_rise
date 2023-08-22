import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS, FONTS, scale} from '../../constants';
import {RiseSvg} from '../../components/svgs';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[{alignItems: 'center', gap: scale(21.91)}]}>
        <RiseSvg />

        <Text style={[styles.textContentStyle]}>
          Dollar investments that {'\n'} help you grow
        </Text>
      </View>
      <View style={[]}>
        <Text style={[styles.footerTextStyle]}>
          All rights reserved {'\n'} (c) 2021
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.TEAL,
    justifyContent: 'space-between',
    paddingVertical: scale(60),
  },
  textContentStyle: {
    textAlign: 'center',

    color: COLORS.WHITE,
    fontSize: scale(18, 0.7),
    fontFamily: FONTS.GROTESK_REGULAR,
  },
  footerTextStyle: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontSize: scale(12),
    fontFamily: FONTS.GROTESK_VAR,
  },
});
