const STATUSES = ['NOT_STARTED', 'IN_PROGRESS', 'SUCCESS', 'ERROR'];

export const ACTION_STATUS = STATUSES.reduce((prev, status) => ({ ...prev, [status]: status }), {});

export const createActionTypes = name => ({
  START: `${name}:START`,
  SUCCESS: `${name}:SUCCESS`,
  ERROR: `${name}:ERROR`,
});
