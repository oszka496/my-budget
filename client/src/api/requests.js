import { ensureJSON, ensureSuccessOr } from '../utils/requests';
import { formatApiResponse, formatBody } from '../utils/stringUtils';
import { getDefaultHeaders } from './api.helpers';
import { DELETE_ERROR, FETCH_ERROR, PATCH_ERROR, POST_ERROR } from './messages';

export const get = (url, errorMsg = FETCH_ERROR) =>
  fetch(url, { method: 'GET', headers: getDefaultHeaders() })
    .then(ensureSuccessOr(errorMsg))
    .then(ensureJSON)
    .then(formatApiResponse);

export const post = (url, body, errorMsg = POST_ERROR) =>
  fetch(url, {
    method: 'POST',
    headers: getDefaultHeaders(),
    body: JSON.stringify(formatBody(body)),
  })
    .then(ensureSuccessOr(errorMsg))
    .then(ensureJSON)
    .then(formatApiResponse);

export const patch = (url, body, errorMsg = PATCH_ERROR) =>
  fetch(url, {
    method: 'PATCH',
    headers: getDefaultHeaders(),
    body: JSON.stringify(formatBody(body)),
  })
    .then(ensureSuccessOr(errorMsg))
    .then(ensureJSON)
    .then(formatApiResponse);

export const remove = (url, errorMsg = DELETE_ERROR) =>
  fetch(url, { method: 'DELETE', headers: getDefaultHeaders() })
    .then(ensureSuccessOr(errorMsg));
