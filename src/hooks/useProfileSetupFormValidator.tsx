import {useEffect, useState} from 'react';
import * as z from 'zod';

type Form = Omit<SignUpRequest, 'email_address' | 'password'>;

const useFormValidation = () => {
  // Validation schemas
  const registerValidationSchema = z.object({
    first_name: z.string().min(1, {message: 'please enter your first name'}),
    last_name: z.string().min(1, {message: 'please enter your last name'}),
    username: z.string(),
    phone_number: z
      .string()
      .refine(
        val => {
          if (val) return /^(\+\d{1,3})?\d{10,}$/.test(val);
          return false;
        },
        {
          message: 'invalid phone number',
        },
      )
      .optional(),
    date_of_birth: z
      .date()
      .refine(isOfAge, {message: 'you must be atleast 18 years old'}),
  });

  const validationSchema = registerValidationSchema;

  const [formData, setFormData] = useState<Form>({
    date_of_birth: new Date(),
    first_name: '',
    last_name: '',
    username: '',
    phone_number: '',
  });

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof Form, string>>
  >({});
  const [isFormValid, setIsFormValid] = useState(false);

  //   DOB RULES
  function isOfAge(value: Date) {
    const today = new Date();
    return today.getFullYear() - value.getFullYear() >= 18;
  }
  //   END DOB RULES

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

  function handleChange<T = string>(key: keyof Form, value: T) {
    setFormData(prevData => ({...prevData, [key]: value}));
  }

  function setPhone(dialcode: string, phone: string) {
    setFormData(prevData => ({...prevData, phone_number: dialcode + phone}));
  }

  useEffect(() => {
    validateForm();
    console.log(formData);
  }, [formData]);

  return {
    formData,
    formErrors,
    isFormValid,
    validateForm,
    handleChange,
    setPhone,
  };
};

export default useFormValidation;
