import React, { useEffect } from 'react';
import { bool, func, node, string } from 'prop-types';
import { ACTION_STATUS } from 'utils/actions.utils';
import { CenteredSpinner } from '../spinner';

export const ApiDataLoader = ({ fetchData, status, noSpinner, children }) => {
  useEffect(() => { fetchData(); }, [fetchData]);

  if (status === ACTION_STATUS.SUCCESS) return children;
  if (status === ACTION_STATUS.ERROR || noSpinner) return null;
  return <CenteredSpinner />;
};

ApiDataLoader.propTypes = {
  fetchData: func.isRequired,
  status: string.isRequired,
  noSpinner: bool,
  children: node,
};
