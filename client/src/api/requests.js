import { parseToJSON, throwErrorOnNotOk } from '../utils/requests';
import { formatApiResponse, formatBody } from '../utils/stringUtils';
import { getDefaultHeaders } from './api.helpers';

export const get = (url) =>
  fetch(url, { method: 'GET', headers: getDefaultHeaders() })
    .then(throwErrorOnNotOk)
    .then(parseToJSON)
    .then(formatApiResponse);

export const post = (url, body) =>
  fetch(url, {
    method: 'POST',
    headers: getDefaultHeaders(),
    body: JSON.stringify(formatBody(body)),
  })
    .then(throwErrorOnNotOk)
    .then(parseToJSON)
    .then(formatApiResponse);

export const patch = (url, body) =>
  fetch(url, {
    method: 'PATCH',
    headers: getDefaultHeaders(),
    body: JSON.stringify(formatBody(body)),
  })
    .then(throwErrorOnNotOk)
    .then(parseToJSON)
    .then(formatApiResponse);

export const put = (url, body) =>
  fetch(url, {
    method: 'PUT',
    headers: getDefaultHeaders(),
    body: JSON.stringify(formatBody(body)),
  })
    .then(throwErrorOnNotOk)
    .then(parseToJSON)
    .then(formatApiResponse);

export const remove = (url) =>
  fetch(url, { method: 'DELETE', headers: getDefaultHeaders() })
    .then(throwErrorOnNotOk);
