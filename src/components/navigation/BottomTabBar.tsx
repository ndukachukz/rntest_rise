import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Pressable,
  LayoutChangeEvent,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import {width, COLORS, FONTS, scale} from '../../constants';

const TabItem = ({
  route,
  index,
  navigation,
  state,
  onPressCB,
  onLayout,
}: {
  route: BottomTabBarProps['state']['routes'][number];
  index: number;
  state: BottomTabBarProps['state'];
  navigation: BottomTabBarProps['navigation'];
  descriptors?: BottomTabBarProps['descriptors'];
  onPressCB: (index: number) => void;
  onLayout: (e: LayoutChangeEvent) => void;
}) => {
  const label = route.name.substring(0, route.name.length - 7);
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }

    onPressCB(index);
  };

  const onLongPress = () => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <Pressable
      onLayout={onLayout}
      android_disableSound
      onLongPress={onLongPress}
      onPress={onPress}
      style={[styles.tab]}>
      {/* TODO: SHOW TEXT WHEN ITS NOT ACTIVE */}
      <Text style={[styles.tabLabel, isFocused && styles.activeTabLabel]}>
        {label}
      </Text>
      <View style={styles.elipse} />
    </Pressable>
  );
};

function BottomTabBar({state, navigation}: BottomTabBarProps) {
  const offset = useSharedValue(0);
  const tabWidth = width / state.routes.length;

  const onPressCB = (index: number) => {
    offset.value = withTiming(index * tabWidth);
  };

  // get information about the components position on the screen -----

  const reducer = (_state: any, action: {x: number; index: number}) => {
    // Add the new value to the state
    return [..._state, {x: action.x, index: action.index}];
  };

  const [layout, dispatch] = React.useReducer(reducer, []);

  const handleLayout = (event: LayoutChangeEvent, index: number) => {
    dispatch({x: event.nativeEvent.layout.x, index});
  };

  // animations ------------------------------------------------------

  const xOffset = useDerivedValue(() => {
    // Our code hasn't finished rendering yet, so we can't use the layout values
    if (layout.length !== state.routes.length) return 0;
    // We can use the layout values
    // Copy layout to avoid errors between different threads
    return [...layout].find(({index}) => index === state.index)!.x;
    // Calculate the offset new if the activeIndex changes (e.g. when a new tab is selected)
    // or the layout changes (e.g. when the components haven't finished rendering yet)
  }, [state.index, layout]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      // translateX to the calculated offset with a smooth transition
      transform: [{translateX: withTiming(xOffset.value, {duration: 250})}],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.activeTab, animatedStyles]} />

      {state.routes.map((route, index) => (
        <TabItem
          key={index}
          index={index}
          route={route}
          navigation={navigation}
          state={state}
          onPressCB={onPressCB}
          onLayout={e => handleLayout(e, index)}
        />
      ))}
    </View>
  );
}

export default BottomTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
  },

  tabLabel: {
    color: COLORS.GRAY[250],
    fontFamily: FONTS.DM_SANS,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 6,
  },
  activeTabLabel: {
    color: COLORS.TEAL['50'],
    fontWeight: '700',
    fontFamily: 'Nexa_Bold',
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    minWidth: width / 5 - 12,
  },
  activeTab: {
    position: 'absolute',
    top: 0,
    backgroundColor: COLORS.TEAL,
    minWidth: width / 5 - 12,
    height: 2,
  },
  elipse: {
    width: scale(8.489),
    height: scale(8.489),
  },
});
