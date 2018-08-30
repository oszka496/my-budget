export const RAISE_ERROR = 'MESSAGE:RAISE_ERROR';
export const DISMISS_MESSAGE = 'MESSAGE:DISMISS';

let latestId = 0;

export const raiseError = errorMsg => {
  latestId += 1;
  return {
    type: RAISE_ERROR,
    payload: {
      id: latestId,
      message: errorMsg,
      type: 'error',
    },
  };
};

export const dismissMessage = id => ({
  type: DISMISS_MESSAGE,
  id,
});
