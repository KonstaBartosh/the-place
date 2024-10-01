import { TAuthData } from '..';
import { loginUserApi } from '../api/loginUserApi';

export const useLogin = () => {
  const loginUser = async (data: TAuthData) => {
    try {
      const response = await loginUserApi(data);

      if (response.status === 401) {
        throw new Error('Invalid email or password');
      }

      if (response.status !== 200) {
        throw new Error('Login failed. Please try again.');
      }

      // If the response is successful, parse the JSON data and return it
      const jwt = await response.json();

      localStorage.setItem('token', jwt.token);

      return jwt;
    } catch (err) {
      throw new Error(
        err instanceof Error ? err.message : 'Login failed. Please try again.'
      );
    }
  };

  return { loginUser };
};
