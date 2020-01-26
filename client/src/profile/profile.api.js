import * as requests from 'api-new/requests';
import { profile } from 'api-new/urls';

export const fetchProfile = () => requests.get(profile());
export const updateProfile = body => requests.patch(profile(), body);
