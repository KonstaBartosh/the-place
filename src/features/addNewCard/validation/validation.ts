import * as yup from 'yup';

export const schema = yup.object({
  name: yup
    .string()
    .min(3, 'Title must be at least 3 characters')
    .max(40, 'Title must be at most 40 characters')
    .required('Enter title of your card'),
  link: yup.string().url('Invalid URL format').required('URL is required'),
});
