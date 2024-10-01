import { AUTH_URL } from '../../../App/constants/constants';
import { TAuthData } from '../types/types';

export const loginUserApi = async (data: TAuthData) => {
  const { email, password } = data;

  const response = await fetch(AUTH_URL + '/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
};
