import { API_CONFIG } from '../../../App/constants/constants';

function checkResponse(res: Response) {
  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }

  return res.json();
}

export async function deleteCardApi(id: string) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/${id}`, {
    method: 'DELETE',
    headers: API_CONFIG.headers,
  });

  return checkResponse(res);
}

export async function handleLikeApi(
  id: string | undefined,
  isLiked: boolean | undefined
) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: API_CONFIG.headers,
  });

  return checkResponse(res);
}

export async function postCardApi(name: string, link: string) {
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
