import { useEffect } from 'react';
import { bool, func, node } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCategories as fetchCategoriesAction } from '../category.actions';

const mapStateToProps = (state) => ({
  loaded: state.categories.isLoaded,
});

const mapDispatchToProps = {
  fetchCategories: fetchCategoriesAction,
};

export const Loader = ({ fetchCategories, loaded, children }) => {
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);
  return loaded ? children : null; // TODO: Add spinner and error handling
};

Loader.propTypes = {
  fetchCategories: func.isRequired,
  loaded: bool.isRequired,
  children: node,
};

export const CategoriesLoader = connect(mapStateToProps, mapDispatchToProps)(Loader);
