export const USER_LOGGED_IN = 'AUTH:LOGIN';

export const userLoggedIn = (username, token) => ({
  type: USER_LOGGED_IN,
  username,
  token,
});
