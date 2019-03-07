import { ensureJSON, ensureSuccessOr } from './utils/requests';
import { formatApiResponse } from './utils/stringUtils';

const BASE_URL = 'http://localhost:8000/';

const getDefaultHeaders = () => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const token = localStorage.getItem('token');
  if (token) {
    headers.set('Authorization', `Token ${token}`);
  }
  return headers;
};

const api = {
  requests: {
    get: (url, errorMsg = 'Failed to fetch data from the API') =>
      fetch(url, { method: 'GET', headers: getDefaultHeaders() })
        .then(ensureSuccessOr(errorMsg))
        .then(ensureJSON)
        .then(formatApiResponse),
    post: (url, body, errorMsg = 'Failed to post data to the API') =>
      fetch(url, { method: 'POST', headers: getDefaultHeaders(), body })
        .then(ensureSuccessOr(errorMsg))
        .then(ensureJSON)
        .then(formatApiResponse),
    patch: (url, body, errorMsg = 'Failed to put data to the API') =>
      fetch(url, { method: 'PATCH', headers: getDefaultHeaders(), body })
        .then(ensureSuccessOr(errorMsg))
        .then(ensureJSON)
        .then(formatApiResponse),
    remove: (url, errorMsg = 'Failed to delete') =>
      fetch(url, { method: 'DELETE', headers: getDefaultHeaders() })
        .then(ensureSuccessOr(errorMsg)),
  },
  auth: {
    login: () => `${BASE_URL}api/token/`,
  },
  category: {
    list: () => `${BASE_URL}api/categories/`,
    item: id => `${BASE_URL}api/categories/${id}`,
  },
  currency: {
    list: () => `${BASE_URL}api/currencies/`,
    item: id => `${BASE_URL}api/currencies/${id}`,
  },
  profile: () => `${BASE_URL}api/profile/`,
  transaction: {
    list: () => `${BASE_URL}api/transactions/`,
    item: id => `${BASE_URL}api/transactions/${id}`,
  },
};

export default api;
