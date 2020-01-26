import uuid from 'uuid';

export const RAISE_ERROR = 'MESSAGE:RAISE_ERROR';
export const DISMISS_MESSAGE = 'MESSAGE:DISMISS';

export const raiseError = errorMsg => ({
  type: RAISE_ERROR,
  payload: {
    id: uuid.v4(),
    message: errorMsg,
    type: 'error',
  },
});

export const dismissMessage = id => ({
  type: DISMISS_MESSAGE,
  id,
});
