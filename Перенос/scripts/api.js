import { apiConfig } from './constants';

function checkResponse(res) {
  if (!res.ok) {
    throw new Error (`Ошибка: ${res.status}`)
  }

  return res.json();
}

function fetchCards() {
  return fetch(apiConfig.baseUrl + '/cards', {
    headers: apiConfig.headers
  })
}

function fetchUser() {
  return fetch(apiConfig.baseUrl + '/users/me', {
    headers: apiConfig.headers
  })
}

function updateUser(name, about) {
  return fetch(apiConfig.baseUrl + '/users/me', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(checkResponse)
}

function updateAvatar(link) {
  return fetch(apiConfig.baseUrl + '/users/me/avatar', {
    method: 'PATCH',
    headers: apiConfig.headers,
    body: JSON.stringify({
      avatar: link
    })
  })
  .then(checkResponse)
}

function postCard(name, link) {
  return fetch(apiConfig.baseUrl + '/cards', {
    method: 'POST',
    headers: apiConfig.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(checkResponse)
}

function deleteCard(id) {
  return fetch(`${apiConfig.baseUrl}/cards/${id}`, {
    method: 'DELETE',
    headers: apiConfig.headers
  })
  .then(checkResponse)
}

function handleLikeCard(id, isLiked) {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: apiConfig.headers
  })
  .then(checkResponse)
}

export {
  fetchCards,
  fetchUser,
  updateUser,
  updateAvatar,
  postCard,
  deleteCard,
  handleLikeCard
};
