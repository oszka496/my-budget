const STATUSES = ['NOT_STARTED', 'IN_PROGRESS', 'SUCCESS', 'ERROR'];

export const ACTION_STATUS = STATUSES.reduce((prev, status) => ({ ...prev, [status]: status }), {});

export const createActionTypes = name => ({
  START: `${name}Start`,
  SUCCESS: `${name}Success`,
  ERROR: `${name}Error`,
});
