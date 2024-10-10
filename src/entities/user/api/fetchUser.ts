import { API_CONFIG } from "../../../App/constants/constants";

export const fetchUser = () => {
  return fetch(API_CONFIG.BASE_URL + '/users/me', {
    headers: API_CONFIG.headers,
  });
}
