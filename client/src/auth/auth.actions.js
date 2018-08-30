export const USER_LOGGED_IN = 'AUTH:LOGIN';
export const USER_LOGGED_OUT = 'AUTH:LOGOUT';

export const userLoggedIn = (username, token) => ({
  type: USER_LOGGED_IN,
  username,
  token,
});

export const userLoggedOut = () => ({ type: USER_LOGGED_OUT });
