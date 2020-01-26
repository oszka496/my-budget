import * as requests from 'api/requests';
import { profile } from 'api/urls';

export const fetchProfile = () => requests.get(profile());
export const updateProfile = body => requests.patch(profile(), body);
