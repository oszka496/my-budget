export const throwErrorOnNotOk = (response) => {
  if (!response.ok) {
    const { status, statusText } = response;
    throw new Error(`Error ${status}: ${statusText}`);
  }
  return response;
};

export const parseToJSON = (response) => (response.json());
