import { createActionTypes } from '../utils/actions.utils';

export const LOGIN = createActionTypes('auth/login');
export const authenticate = ({ username, password }) => ({ username, password, type: LOGIN.START });
export const authenticateSuccess = ({ username, token }) => ({ type: LOGIN.SUCCESS, username, token });

export const LOGOUT = 'auth/logout';
export const signOff = () => ({ type: LOGOUT });
