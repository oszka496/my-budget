import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { categoriesFetched } from '../category.actions';
import { selectCategoriesAll } from '../category.selectors';
import CategoryItem from './CategoryItem';
import { listOf, withDataFrom, withLoadingSpinner } from '../../hocs/index';
import CategoryModel from '../category.model';
import api from '../../api';
import { raiseError } from '../../core/message.actions';

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
