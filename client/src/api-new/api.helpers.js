export const getDefaultHeaders = () => {
  const headers = new Headers();
  headers.set('Content-Type', 'application/json');
  const token = localStorage.getItem('token');
  if (token) {
    headers.set('Authorization', `Token ${token}`);
  }
  return headers;
};
