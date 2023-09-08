import {z} from 'zod';

export {default as countryDialInfo} from './countryDialInfo';

export function validationError<Form>(
  key: keyof Form,
  error: z.ZodError,
  cb: (errors: Record<string | number, string>) => void,
) {
  const errors: Record<string | number, string> = {};
  error.errors.forEach(err => {
    const message = err.message;
    errors[key as string] = message;
  });
  cb(errors);
}
