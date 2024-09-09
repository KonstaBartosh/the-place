import { API_CONFIG } from "../../../Shared/Constants/constants";
import { TUser } from "../../../Shared/Types/common";

function checkResponse(res: Response) {
  if (!res.ok) {
    throw new Error (`Ошибка: ${res.status}`)
  }

  return res.json();
}

async function updateUser(user: TUser) {
  const { name, about } = user;

  const res = await fetch(API_CONFIG.BASE_URL + '/users/me', {
    method: 'PATCH',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  });

  return checkResponse(res);
}

async function updateAvatar(user: TUser) {
  const { avatar } = user;
  
  const res = await fetch(API_CONFIG.BASE_URL + '/users/me/avatar', {
    method: 'PATCH',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  });

  return checkResponse(res);
}

export {
  updateUser,
  updateAvatar
};