import * as requests from '../api-new/requests';
import { auth } from '../api-new/urls';

export const signIn = ({ username, password }) => requests.post(auth.login(), { username, password });
