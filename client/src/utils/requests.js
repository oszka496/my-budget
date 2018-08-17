export const ensureSuccessOr = (errorMsg) => (response) => {
  if (!response.ok) {
    throw new Error(errorMsg);
  }
  return response;
};

export const ensureJSON = (response) => (response.json());
