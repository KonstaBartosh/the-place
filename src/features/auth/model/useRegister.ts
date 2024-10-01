import { TAuthData } from '..';
import { authApi } from '../api/authApi';


export const useRegister = () => {
  const registerUser = async (data: TAuthData) => {
    try {
      const response = await authApi({ data, url: '/signup' });

      if (response.status === 400) {
        throw new Error('User already exists');
      }

      if (response.status !== 201) {
        throw new Error('Registration failed. Please try again.');
      }

      const newUser = await response.json();

      return newUser;
    } catch (err) {
      throw new Error(
        err instanceof Error
          ? err.message
          : 'Registration failed. Please try again.'
      );
    }
  };

  return { registerUser };
};
