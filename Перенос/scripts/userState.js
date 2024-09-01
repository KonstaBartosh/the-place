let currentUser = null;

export function setUserContext(user) {
  currentUser = user
}

export function getUserContext() {
  return currentUser;
}