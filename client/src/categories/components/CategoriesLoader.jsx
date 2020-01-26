import React, { useEffect } from 'react';
import { func, node, oneOf } from 'prop-types';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { ACTION_STATUS } from 'utils/actions.utils';
import { categoryActions } from '../category.slice';
import { getCategoriesFetchStatus } from '../category.selectors';

const mapStateToProps = state => ({
  status: getCategoriesFetchStatus(state),
});

const mapDispatchToProps = {
  fetchCategories: categoryActions.fetchStart,
};

export const Loader = ({ fetchCategories, status, children }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  if (status === ACTION_STATUS.ERROR) return null;
  if (status === ACTION_STATUS.SUCCESS) return children;
  return <div><CircularProgress /></div>;
};

Loader.propTypes = {
  fetchCategories: func.isRequired,
  status: oneOf(Object.values(ACTION_STATUS)).isRequired,
  children: node,
};

export const CategoriesLoader = connect(mapStateToProps, mapDispatchToProps)(Loader);
