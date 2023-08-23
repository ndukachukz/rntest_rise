import React, {ReactNode} from 'react';
import {View, Text, ViewProps, TextProps, Image, FlatList} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

import globalStyles from '../../styles';
import styles from './styles';
import {BASE_HORIZONTAL_PADDING, COLORS, scale} from '../../constants';
import {Button, ChevronLeft, ChevronRight} from '../../components';

interface Slide {
  containerStyle: ViewProps['style'];
  image: ReactNode;
  title?: string;
  textStyle?: TextProps['style'];
  subTitle: string;
  subTitleStyle: TextProps['style'];
  activeColor?: string;
  footerActions?(
    props: Slide & {activeIndex?: number; navigation: Props['navigation']},
  ): React.JSX.Element;
}

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  PublicStackNavigator,
  'Onboarding'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const slides: Slide[] = [
  {
    containerStyle: {
      backgroundColor: COLORS.CHAMPAGNE_IVORY,
    },
    image: (
      <Image
        source={require('../../../assets/images/onboarding/onboarding-0.png')}
        style={styles.image}
      />
    ),
    title: 'Quality assets',
    subTitle:
      'Rise invests your money into the best dollar investments around the world.',
    subTitleStyle: {},
    activeColor: COLORS.ORANGE,
    footerActions: ({activeColor, activeIndex}) => (
      <View style={[styles.buttonRowContainer]}>
        <Button
          touchableProps={{
            style: {
              backgroundColor: COLORS.OFF_WHITE,
            },
          }}
          iconLeft={
            <ChevronLeft
              color={activeIndex === 0 ? COLORS.GRAY[300] : activeColor}
            />
          }
          textProps={{style: {color: activeColor}}}
        />
        <Button
          title="Next"
          iconRight={<ChevronRight color={activeColor} />}
          touchableProps={{
            style: {backgroundColor: COLORS.OFF_WHITE},
          }}
          textProps={{style: {color: activeColor}}}
        />
      </View>
    ),
  },
  {
    containerStyle: {
      backgroundColor: COLORS.LIGHT_PINK,
    },
    image: (
      <Image
        source={require('../../../assets/images/onboarding/onboarding-1.png')}
        style={styles.image}
      />
    ),
    title: 'Superior Selection',
    subTitle:
      'Our expert team and intelligent algorithms select assets that beat the markets.',
    subTitleStyle: {},
    activeColor: COLORS.PINK,
    footerActions() {
      return (
        <View style={[styles.buttonRowContainer]}>
          <Button
            touchableProps={{
              style: {
                backgroundColor: COLORS.OFF_WHITE,
              },
            }}
            iconLeft={<ChevronLeft color={COLORS.PINK} />}
            textProps={{style: {color: COLORS.PINK}}}
          />
          <Button
            title="Next"
            iconRight={<ChevronRight color={COLORS.PINK} />}
            touchableProps={{
              style: {backgroundColor: COLORS.OFF_WHITE},
            }}
            textProps={{style: {color: COLORS.PINK}}}
          />
        </View>
      );
    },
  },
  {
    containerStyle: {
      backgroundColor: COLORS.LIGHT_TEAL,
    },
    image: (
      <Image
        source={require('../../../assets/images/onboarding/onboarding-2.png')}
        style={styles.image}
      />
    ),
    title: 'Better Performance',
    textStyle: {
      color: COLORS.TEAL,
    },
    subTitle:
      'You earn more returns, achieve more of your financial goals and protect your money from devaluation.',
    subTitleStyle: {
      color: COLORS.TEAL,
    },
    activeColor: COLORS.LIGHT_TEAL,
    footerActions: ({navigation}) => (
      <View style={[styles.buttonColContainer]}>
        <Button
          touchableProps={{
            style: {
              backgroundColor: COLORS.TEAL,
            },
            onPress: () => {
              navigation.navigate('SignUp');
            },
          }}
          textProps={{style: {color: COLORS.WHITE}}}
          title="Sign Up"
        />
        <Button
          title="Sign In"
          touchableProps={{
            style: {backgroundColor: COLORS.OFF_WHITE},
          }}
          textProps={{style: {color: COLORS.TEAL}}}
        />
      </View>
    ),
  },
];

const Indicator = ({
  activeColor,
  active,
}: {
  activeColor?: string;
  active: boolean;
}) => {
  return (
    <View style={[styles.dot, active && {backgroundColor: activeColor}]} />
  );
};

const Onboarding = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isLastSlide = activeIndex === slides.length - 1;
  return (
    <FlatList
      data={slides}
      renderItem={({item}) => {
        return (
          <View
            style={[
              globalStyles.container,
              styles.slideContainer,
              item.containerStyle,
            ]}>
            <View style={{justifyContent: 'center'}}>
              {item.image}
              <View style={styles.dotContainer}>
                {slides.map((_, i) => {
                  return (
                    <Indicator
                      key={i}
                      activeColor={isLastSlide ? COLORS.TEAL : item.activeColor}
                      active={activeIndex === i}
                    />
                  );
                })}
              </View>
            </View>

            <View style={styles.textContentContainer}>
              <Text
                style={[
                  styles.title,
                  {color: item.activeColor},
                  item.textStyle,
                ]}>
                {item.title}
              </Text>
              <Text style={[styles.subTitle]}>{item.subTitle}</Text>
            </View>

            {item.footerActions &&
              item.footerActions({...item, activeIndex, navigation})}
          </View>
        );
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      bounces={false}
      onMomentumScrollEnd={e => {
        const index = Math.floor(
          Math.floor(e.nativeEvent.contentOffset.x) /
            Math.floor(e.nativeEvent.layoutMeasurement.width),
        );

        setActiveIndex(index);
      }}
    />
  );
};

export default Onboarding;
