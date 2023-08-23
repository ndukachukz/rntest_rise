import {useEffect, useState} from 'react';
import * as z from 'zod';

type Form = Pick<SignUpRequest, 'email_address' | 'password'>;

const useFormValidation = () => {
  // Validation schemas
  const registerValidationSchema = z.object({
    email_address: z.string().email('Invalid email address'),
    password: z
      .string()
      .refine(hasMinLen, {
        message: 'Password must be at least 8 characters',
      })
      .refine(hasUpper, {
        message: 'Password must have at least 1 uppercase letter',
      })
      .refine(hasSpecialChar, {
        message: 'Password must have at least 1 special character',
      }),
  });

  const validationSchema = registerValidationSchema;

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

  const validateForm = () => {
    try {
      validationSchema.parse(formData);
      setFormErrors({});
      setIsFormValid(true);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string | number, string> = {};
        error.errors.forEach(err => {
          const field = err.path[0];
          const message = err.message;
          errors[field] = message;
        });
        setFormErrors(errors);
        setIsFormValid(false);
      }
    }
  };

  const handleChange = (key: keyof Form, value: string) => {
    setFormData(prevData => ({...prevData, [key]: value}));
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  return {
    formData,
    formErrors,
    isFormValid,
    validateForm,
    passwordRules,
    handleChange,
  };
};

export default useFormValidation;
