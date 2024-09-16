import * as yup from 'yup';

export const profileSchema = yup.object({
  name: yup
    .string()
    .min(2, 'Your name must be at least 2 characters')
    .max(20, 'Your name must be at most 20 characters')
    .required('Enter your name'),
  about: yup
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(100, 'Must be at most 100 characters')
    .required('Musbe be filled'),
});
