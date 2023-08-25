import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

import globalStyles from '../../styles/index';
import styles from './styles';
import {
  Button,
  HidePassSvg,
  Input,
  RoundedCheck,
  ShowPassSvg,
} from '../../components';
import useFormValidation from '../../hooks/useSignupFormValidator';
import {useAppDispatch} from '../../hooks';
import {setSignupCredentials} from '../../features/auth/slice';
import {COLORS, scale} from '../../constants';
import FormContainer from '../../components/form/FormContainer';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  PublicStackNavigator,
  'SignUp'
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

const SignUp = ({navigation}: Props) => {
  const {formData, handleChange, passwordRules, formErrors, isFormValid} =
    useFormValidation();
  const [showPassword, setShowPassword] = React.useState(true);

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(setSignupCredentials(formData));
    navigation.navigate('ProfileSetup');
  };

  return (
    <FormContainer
      style={[{flex: 1, justifyContent: 'space-evenly'}, styles.container]}>
      <View style={{gap: scale(40)}}>
        <View style={styles.textContainer}>
          <Text style={globalStyles.heading}>Create an account</Text>
          <Text style={globalStyles.subHeading}>
            Start building your dollar-denominated investment portfolio
          </Text>
        </View>
        <View style={[styles.formContainer]}>
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
            <Text style={globalStyles.inputError}>
              {formErrors.email_address}
            </Text>
          </View>
          <Input
            label="Password"
            textInputProps={{
              value: formData.password,
              onChangeText: text => handleChange('password', text),
              secureTextEntry: showPassword,
              textContentType: 'newPassword',
            }}
            iconRight={({}) => (
              <PasswordIcon
                showPass={showPassword}
                handleToggle={() => setShowPassword(!showPassword)}
              />
            )}
            labelProps={{}}
          />
          <View style={[styles.passRuleContainer]}>
            <View style={styles.passRule}>
              <View style={styles.passRuleCheckContainer}>
                {passwordRules.passHasMinLen && <RoundedCheck />}
              </View>
              <Text>Minimum of 8 characters</Text>
            </View>
            <View style={styles.passRule}>
              <View style={styles.passRuleCheckContainer}>
                {passwordRules.passHasUpper && <RoundedCheck />}
              </View>
              <Text>One UPPERCASE character</Text>
            </View>
            <View style={styles.passRule}>
              <View style={[styles.passRuleCheckContainer]}>
                {passwordRules.passHasSpecialChar && <RoundedCheck />}
              </View>
              <Text>One unique character (e.g: !@#$%^&*?)</Text>
            </View>
          </View>
        </View>
        <Button
          title="Sign Up"
          textProps={{}}
          touchableProps={{
            disabled: !isFormValid,
            onPress: handleSubmit,
          }}
        />
      </View>
      <Text style={styles.footerText}>
        Have an account?{' '}
        <Text
          style={{color: COLORS.TEAL}}
          onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </FormContainer>
  );
};

export default SignUp;
