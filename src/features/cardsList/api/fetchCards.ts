import { API_CONFIG } from '../../../App/constants/constants';

export const fetchCards = () => {
  return fetch(API_CONFIG.BASE_URL + '/cards', {
    headers: API_CONFIG.headers,
  });
};
