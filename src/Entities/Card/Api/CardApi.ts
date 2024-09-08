import { checkResponse } from "../../../App/Api/api";
import { API_CONFIG } from "../../../Shared/Constants/constants";

async function deleteCardApi(id: string) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/${id}`, {
    method: 'DELETE',
    headers: API_CONFIG.headers
  });

  return checkResponse(res);
}

async function handleLikeApi(
  id: string | undefined, 
  isLiked: boolean | undefined
  ) {
  const res = await fetch(`${API_CONFIG.BASE_URL}/cards/likes/${id}`, {
    method: isLiked ? 'DELETE' : 'PUT',
    headers: API_CONFIG.headers
  });

  return checkResponse(res);
}

export {
  deleteCardApi,
  handleLikeApi
}