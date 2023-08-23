import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from 'react-native-screens/native-stack';

import globalStyles from '../../styles/index';
import {BASE_HORIZONTAL_PADDING, COLORS, FONTS, scale} from '../../constants';
import {Button, Input} from '../../components';
import useFormValidation from '../../hooks/useProfileSetupFormValidator';
import {useAppSelector} from '../../hooks';
import PhoneInput from '../../components/form/phoneInput';
import DatePicker from '../../components/form/datePicker';
import {useSignUpMutation} from '../../services/authApi';

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  PublicStackNavigator,
  'ProfileSetup'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileSetup = ({navigation}: Props) => {
  const {formData, handleChange, isFormValid, formErrors} = useFormValidation();
  const [signup, {isLoading}] = useSignUpMutation();

  const signupCredentials = useAppSelector(
    state => state.auth.signupCredentials,
  );

  const onSignup = () => {
    console.log({...formData, ...signupCredentials});
    const req = {...formData, ...signupCredentials} as any;
    signup(req)
      .unwrap()
      .then(res => {
        console.log('SIGNUP RES => ', res);
        navigation.navigate('SignupSuccess');
      })
      .catch(error => {
        // *TODO: Catch unhandled http/server exceptions with sentry or firebase logger
        console.log('SIGNUP ERROR => ', error);
      });
  };

  return (
    <KeyboardAvoidingView style={[globalStyles.container]}>
      <ScrollView
        contentContainerStyle={[globalStyles.container, styles.container]}>
        <View style={styles.textContainer}>
          <Text style={globalStyles.heading}>Tell Us More About You</Text>
          <Text style={globalStyles.subHeading}>
            Please use your name as it appears on your ID.
          </Text>
        </View>

        <View style={styles.formContainer}>
          <View>
            <Input
              label="Legal First Name"
              textInputProps={{
                value: formData.first_name,
                onChangeText: text => handleChange('first_name', text),
              }}
              labelProps={{}}
            />
            {formErrors.first_name && (
              <Text style={globalStyles.inputError}>
                {formErrors.first_name}
              </Text>
            )}
          </View>
          <View>
            <Input
              label="Legal Last Name"
              textInputProps={{
                value: formData.last_name,
                onChangeText: text => handleChange('last_name', text),
              }}
              labelProps={{}}
            />
            {formErrors.last_name && (
              <Text style={globalStyles.inputError}>
                {formErrors.last_name}
              </Text>
            )}
          </View>
          <View>
            <Input
              label="Nick Name"
              textInputProps={{
                value: formData.username,
                onChangeText: text => handleChange('username', text),
              }}
              labelProps={{}}
            />
            {formErrors.username && (
              <Text style={globalStyles.inputError}>{formErrors.username}</Text>
            )}
          </View>
          <View>
            <PhoneInput
              label="Phone Number"
              textInputProps={{
                keyboardType: 'phone-pad',
              }}
              labelProps={{}}
              onChangeText={text => handleChange('phone_number', text)}
            />
            {formErrors.phone_number && (
              <Text style={globalStyles.inputError}>
                {formErrors.phone_number}
              </Text>
            )}
          </View>
          <View>
            <DatePicker
              label="Date Of Birth(2002-08-09, yyyy-MM-dd)"
              labelProps={{}}
              textInputProps={{
                keyboardType: 'decimal-pad',
              }}
              onDateChanged={date =>
                handleChange('date_of_birth', new Date(date))
              }
            />
            <Text style={globalStyles.inputError}>
              {typeof formErrors.date_of_birth === 'string' &&
                formErrors.date_of_birth}
            </Text>
          </View>
        </View>

        <Button
          title="Continue"
          textProps={{}}
          touchableProps={{
            disabled: !isFormValid || isLoading,
            onPress: () => onSignup(),
          }}
        />

        <Text
          style={{
            fontFamily: FONTS.DM_SANS,
            color: COLORS.TEXT_DARK,
            marginVertical: scale(16),
            textAlign: 'center',
          }}>
          By clicking Continue, you agree to our{' \n '}
          <Text style={{color: COLORS.TEAL}}>Terms of Service</Text> and{' '}
          <Text style={{color: COLORS.TEAL}}>Privacy Policy.</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileSetup;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: BASE_HORIZONTAL_PADDING,
    backgroundColor: COLORS.WHITE,
    gap: scale(28),
  },
  textContainer: {
    gap: scale(5),
  },
  formContainer: {
    gap: scale(17),
    paddingVertical: scale(5),
  },
});
