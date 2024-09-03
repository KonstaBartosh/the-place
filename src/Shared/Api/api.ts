const API_CONFIG = {
  BASE_URL: 'https://mesto.nomoreparties.co/v1/cohort-64',
  headers: {
    authorization: '3fea5f60-ca24-4403-9861-1d6a72c9cf2f',
    'Content-Type': 'application/json'
  }
}

function checkResponse(res: Response) {
  if (!res.ok) {
    throw new Error (`Ошибка: ${res.status}`)
  }

  return res.json();
}

function fetchCards() {
  return fetch(API_CONFIG.BASE_URL + '/cards', {
    headers: API_CONFIG.headers
  })
}

function fetchUser() {
  return fetch(API_CONFIG.BASE_URL + '/users/me', {
    headers: API_CONFIG.headers
  })
}

async function updateUser(name: string, about: string) {
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

async function updateAvatar(link: string) {
  const res = await fetch(API_CONFIG.BASE_URL + '/users/me/avatar', {
    method: 'PATCH',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      avatar: link
    })
  });

  return checkResponse(res);
}

async function postCard(name: string, link: string) {
  const res = await fetch(API_CONFIG.BASE_URL + '/cards', {
    method: 'POST',
    headers: API_CONFIG.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  });

  return checkResponse(res);
}

async function deleteCard(id: string) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/${id}`, {
    method: 'DELETE',
    headers: API_CONFIG.headers
  });

  return checkResponse(res);
}

async function handleLikeCard(id: string, isLiked: boolean) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: API_CONFIG.headers
  });

  return checkResponse(res);
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
