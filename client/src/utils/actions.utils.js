const STATUSES = ['NOT_STARTED', 'IN_PROGRESS', 'SUCCESS', 'ERROR'];

export const ACTION_STATUS = STATUSES.reduce((prev, status) => ({ ...prev, [status]: status }), {});

export const mergeActionStatuses = statuses => {
  if (statuses.every(s => s === ACTION_STATUS.NOT_STARTED)) return ACTION_STATUS.NOT_STARTED;
  if (statuses.every(s => s === ACTION_STATUS.SUCCESS)) return ACTION_STATUS.SUCCESS;
  if (statuses.find(s => s === ACTION_STATUS.ERROR)) return ACTION_STATUS.ERROR;
  return ACTION_STATUS.IN_PROGRESS;
};

export const createActionTypes = name => ({
  START: `${name}Start`,
  SUCCESS: `${name}Success`,
  ERROR: `${name}Error`,
});
