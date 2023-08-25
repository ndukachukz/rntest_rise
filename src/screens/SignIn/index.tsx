import React from 'react';
import {View, Text} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

import globalStyles from '../../styles/index';
import formStyles from '../SignUp/styles';
import {Button, HidePassSvg, Input, ShowPassSvg} from '../../components';
import useFormValidation from '../../hooks/useSignupFormValidator';
import {useAppDispatch} from '../../hooks';
import {setSignupCredentials} from '../../features/auth/slice';
import {COLORS, scale} from '../../constants';
import FormContainer from '../../components/form/FormContainer';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  PublicStackNavigator,
  'SignIn'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const PasswordIcon = ({
  showPass,
  handleToggle,
}: {
  showPass: boolean;
  handleToggle: () => void;
}) => {
  if (showPass)
    return (
      <ShowPassSvg
        style={{transform: [{translateX: -20}]}}
        onPress={handleToggle}
      />
    );
  return (
    <HidePassSvg
      style={{transform: [{translateX: -20}]}}
      onPress={handleToggle}
    />
  );
};

const SignIn = ({navigation}: Props) => {
  const {formData, handleChange, formErrors, isFormValid} = useFormValidation();
  const [showPassword, setShowPassword] = React.useState(true);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(setSignupCredentials(formData));
    navigation.navigate('ProfileSetup');
  };

  return (
    <FormContainer
      style={[
        {
          flex: 1,
          justifyContent: 'center',
        },
        formStyles.container,
      ]}>
      <View>
        <View
          style={[
            formStyles.textContainer,
            {
              marginBottom: scale(40),
            },
          ]}>
          <Text style={globalStyles.heading}>Welcome back</Text>
          <Text style={globalStyles.subHeading}>
            Let’s get you logged in to get back to building your
            dollar-denominated investment portfolio.
          </Text>
        </View>
        <View style={[formStyles.formContainer, {gap: scale(15)}]}>
          <View>
            <Input
              label="Email Address"
              textInputProps={{
                value: formData.email_address,
                onChangeText: text => handleChange('email_address', text),
                keyboardType: 'email-address',
              }}
              labelProps={{}}
            />
            {formErrors.email_address && (
              <Text style={globalStyles.inputError}>
                {formErrors.email_address}
              </Text>
            )}
          </View>
          <View>
            <Input
              label="Password"
              textInputProps={{
                value: formData.password,
                onChangeText: text => handleChange('password', text),
                secureTextEntry: showPassword,
                textContentType: 'newPassword',
                style: {},
              }}
              containerStyle={{marginBottom: 0}}
              iconRight={({}) => (
                <PasswordIcon
                  showPass={showPassword}
                  handleToggle={() => setShowPassword(!showPassword)}
                />
              )}
              labelProps={{}}
            />
            {formErrors.password && (
              <Text style={globalStyles.inputError}>{formErrors.password}</Text>
            )}
          </View>
        </View>
      </View>

      <View>
        <Button
          title="Sign In"
          textProps={{}}
          touchableProps={{
            disabled: !isFormValid,
            onPress: handleSubmit,
          }}
        />

        <Text
          style={{
            color: COLORS.TEAL,
            textAlign: 'center',
            marginTop: scale(16),
          }}
          onPress={() => console.warn('NAVIGATE TO FORGOT PASSWORD')}>
          I forgot my password
        </Text>
      </View>

      <Text style={formStyles.footerText}>
        Don't have an account?{' '}
        <Text
          style={{color: COLORS.TEAL}}
          onPress={() => navigation.navigate('SignUp')}>
          Sign up
        </Text>
      </Text>
    </FormContainer>
  );
};

export default SignIn;
