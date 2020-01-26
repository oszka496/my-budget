import * as requests from '../api/requests';
import { auth } from '../api/urls';

export const signIn = ({ username, password }) => requests.post(auth.login(), { username, password });
