const BASE_URL = 'http://localhost:8000/';

export const auth = {
  login: () => `${BASE_URL}api/token/`,
};
export const category = {
  list: () => `${BASE_URL}api/categories/`,
  item: id => `${BASE_URL}api/categories/${id}`,
};
export const currency = {
  list: () => `${BASE_URL}api/currencies/`,
  item: id => `${BASE_URL}api/currencies/${id}`,
};
export const profile = () => `${BASE_URL}api/profile/`;
export const transaction = {
  list: ({ categoryId } = {}) => (
    categoryId
      ? `${BASE_URL}api/transactions/?category=${categoryId}`
      : `${BASE_URL}api/transactions/`
  ),
  item: id => `${BASE_URL}api/transactions/${id}/`,
};
