import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import api from 'api';
import { listOf, withDataFrom, withLoadingSpinner } from 'hocs';
import { raiseError } from 'core/message.actions';
import { categoriesFetched } from 'categories/category.actions';
import { selectCategoriesAll } from 'categories/category.selectors';
import { CategoryItem } from 'categories/components';
import CategoryModel from 'categories/category.model';


const mapStateToProps = (state) => ({
  items: selectCategoriesAll(state),
  isLoaded: state.categories.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: categories => dispatch(categoriesFetched(categories)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
});

const API = api.category.list();
const CategoryList = withDataFrom(API)(
  withLoadingSpinner(listOf(ListGroup, CategoryItem)),
);

CategoryList.propTypes = {
  onDataFetched: func.isRequired,
  onFetchFailed: func.isRequired,
  items: arrayOf(CategoryModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
