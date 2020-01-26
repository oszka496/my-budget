import { useEffect } from 'react';
import { bool, func, node } from 'prop-types';
import { ACTION_STATUS } from 'utils/actions.utils';

export const ApiDataLoader = ({ fetchData, status, children }) => {
  useEffect(() => { fetchData(); }, [fetchData]);
  return status === ACTION_STATUS.SUCCESS ? children : null;
};

ApiDataLoader.propTypes = {
  fetchData: func.isRequired,
  status: bool.isRequired,
  children: node,
};
