import {Image} from 'react-native';
import React from 'react';

const AccountAvatarIcon = ({
  size = 32,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => {
  return (
    <Image
      source={require('../../../assets/images/onboarding/onboarding-2.png')}
      style={{width: size, height: size}}
    />
  );
};

export default AccountAvatarIcon;
