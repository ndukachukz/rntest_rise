import {useEffect, useState} from 'react';
import * as z from 'zod';
import {validationError} from '../utils';

type Form = Pick<SignUpRequest, 'email_address' | 'password'>;

const useFormValidation = () => {
  // Validation schemas
  const email_address = z.string().email('Invalid email address');
  const password = z
    .string()
    .refine(hasMinLen, {
      message: 'Password must be at least 8 characters',
    })
    .refine(hasUpper, {
      message: 'Password must have at least 1 uppercase letter',
    })
    .refine(hasSpecialChar, {
      message: 'Password must have at least 1 special character',
    });

  const [formData, setFormData] = useState<Form>({
    email_address: '',
    password: '',
  });

  const [passwordRules, setpasswordRules] = useState({
    passHasMinLen: false,
    passHasUpper: false,
    passHasSpecialChar: false,
  });

  const [formErrors, setFormErrors] = useState<Partial<Form>>({});
  const [isFormValid, setIsFormValid] = useState(false);

  //   PASSWORD RULES HELPER FUNCTIONS
  function hasMinLen(value: string) {
    const hasMinLength = value.length >= 8;
    setpasswordRules(passRules => ({
      ...passRules,
      passHasMinLen: hasMinLength,
    }));
    return hasMinLength;
  }

  function hasUpper(value: string) {
    const hasUppercase = /[A-Z]/.test(value);
    setpasswordRules(passRules => ({
      ...passRules,
      passHasUpper: hasUppercase,
    }));
    return hasUppercase;
  }

  function hasSpecialChar(value: string) {
    const _hasSpecialChar = /[!@#$%^&*]/.test(value);
    setpasswordRules(passRules => ({
      ...passRules,
      passHasSpecialChar: _hasSpecialChar,
    }));
    return hasSpecialChar;
  }
  //  END PASSWORD RULES HELPER FUNCTIONS

  const validateEmail = () => {
    try {
      email_address.parse(formData.email_address);
      setFormErrors({});
      setIsFormValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        validationError<Form>('email_address', error, errors => {
          setFormErrors(errors);
          setIsFormValid(false);
        });
      }
    }
  };

  const validatePassword = () => {
    try {
      password.parse(formData.password);
      setFormErrors({});
      setIsFormValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        validationError<Form>('password', error, errors => {
          setFormErrors(errors);
          setIsFormValid(false);
        });
      }
    }
  };

  const handleChange = (key: keyof Form, value: string) => {
    setFormData(prevData => ({...prevData, [key]: value}));
  };

  useEffect(() => {
    if (formData.email_address.length > 0) validateEmail();
    if (formData.password.length > 0) validatePassword();
  }, [formData]);

  return {
    formData,
    formErrors,
    isFormValid,
    validateEmail,
    validatePassword,
    passwordRules,
    handleChange,
  };
};

export default useFormValidation;
