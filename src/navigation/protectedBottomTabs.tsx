import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Plans, Wallet, Feed, Account} from '../screens';
import {
  FeedIconSvgIcon,
  HomeSvgIcon,
  PlansSvgIcon,
  WalletIconSvg,
  AccountAvatarIcon,
} from '../components';
import {BottomTabBar} from '../components/navigation';

const Tab = createBottomTabNavigator<ProtectedBottomTabsNavigator>();

const ProtectedBottomTabs = () => {
  return (
    <Tab.Navigator>
      {/* TODO: have the bottom tab as the initial screen */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeSvgIcon,
        }}
      />
      <Tab.Screen
        name="Plans"
        component={Plans}
        options={{
          tabBarIcon: PlansSvgIcon,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarIcon: WalletIconSvg,
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: FeedIconSvgIcon,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: AccountAvatarIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default ProtectedBottomTabs;
