import { apiConfig } from './constants';

function fetchCards() {
  return fetch(apiConfig.baseUrl + '/cards', {
    headers: apiConfig.headers
  })
}

function fetchUser() {
  return fetch(apiConfig.baseUrl + '/users/me', {
    headers: apiConfig.headers
  });
}

function updateUser(name, about) {
  return fetch(apiConfig.baseUrl + '/users/me', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
}

function updateAvatar(link) {
  return fetch(apiConfig.baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
}

function postCard(name, link) {
  return fetch(apiConfig.baseUrl + '/cards', {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  });
}

function deleteCard(id) {
  return fetch(`${apiConfig.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  });
}

function putLikeCard(id) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${id}`, {
    method: 'PUT',
    headers: apiConfig.headers
  });
}

function deleteLikeCard(id) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  });
}

export {
  fetchCards,
  fetchUser,
  updateUser,
  updateAvatar,
  postCard,
  deleteCard,
  putLikeCard,
  deleteLikeCard,
};
