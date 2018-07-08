const BASE_URL = 'http://localhost:8000/';
const api = {
  category: {
    list: () => `${BASE_URL}api/categories/`,
    item: id => `${BASE_URL}api/categories/${id}`,
  },
};

export default api;
