import { API_CONFIG } from '../constants/constants';
import { TUser } from '../types/common';

export function checkResponse(res: Response) {
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }

  return res.json();
}

function fetchCards() {
  return fetch(API_CONFIG.BASE_URL + '/cards', {
    headers: API_CONFIG.headers,
  });
}

function fetchUser() {
  return fetch(API_CONFIG.BASE_URL + '/users/me', {
    headers: API_CONFIG.headers,
  });
}

async function deleteCardApi(id: string) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/${id}`, {
    method: 'DELETE',
    headers: API_CONFIG.headers,
  });

  return checkResponse(res);
}

async function handleLikeApi(
  id: string | undefined,
  isLiked: boolean | undefined
) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: API_CONFIG.headers,
  });

  return checkResponse(res);
}

async function postCardApi(name: string, link: string) {
  const res = await fetch(API_CONFIG.BASE_URL + '/cards', {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  });

  return checkResponse(res);
}

async function updateUserApi(user: TUser) {
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

async function updateAvatarApi(user: TUser) {
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

export {
  fetchCards,
  fetchUser,
  deleteCardApi,
  handleLikeApi,
  postCardApi,
  updateUserApi,
  updateAvatarApi,
};
