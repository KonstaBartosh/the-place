import { API_CONFIG } from '../../../App/constants/constants';
import { TUser } from '../../../App/types/common';

function checkResponse(res: Response) {
  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
}

export async function updateUserApi(user: TUser) {
  const { name, about } = user;

  const res = await fetch(API_CONFIG.BASE_URL + '/users/me', {
    method: 'PATCH',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  });

  return checkResponse(res);
}

export async function updateAvatarApi(user: TUser) {
  const { avatar } = user;

  const res = await fetch(API_CONFIG.BASE_URL + '/users/me/avatar', {
    method: 'PATCH',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  });

  return checkResponse(res);
}
