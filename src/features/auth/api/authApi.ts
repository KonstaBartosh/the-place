import { AUTH_URL } from '../../../App/constants/constants';
import { TAuthData } from '../types/types';

type TProps = {
  data: TAuthData;
  url: string;
};

export const authApi = async ({ data, url }: TProps) => {
  const { email, password } = data;

  const response = await fetch(AUTH_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return response;
};
