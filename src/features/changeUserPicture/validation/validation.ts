import * as yup from 'yup';

export const avatarSchema = yup.object({
  avatar: yup
    .string()
    .url('Invalid URL format')
    .required('Avatar URL is required'),
});
