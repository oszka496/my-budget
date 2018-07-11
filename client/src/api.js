const BASE_URL = 'http://localhost:8000/';
const api = {
  category: {
    list: () => `${BASE_URL}api/categories/`,
    item: id => `${BASE_URL}api/categories/${id}`,
  },
  transaction: {
    list: () => `${BASE_URL}api/transactions/`,
    item: id => `${BASE_URL}api/transactions/${id}`,
  },
};

export default api;
