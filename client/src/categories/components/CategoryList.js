import { connect } from 'react-redux';
import { arrayOf, func } from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { categoriesFetched } from '../category.actions';
import { selectCategoriesAll } from '../category.selectors';
import CategoryItem from './CategoryItem';
import { listOf, withDataFrom, withLoadingSpinner } from '../../hocs/index';
import CategoryModel from '../category.model';
import api from '../../api';

function mapStateToProps(state) {
  return {
    items: selectCategoriesAll(state),
    isLoaded: state.categories.isLoaded,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDataFetched: categories => dispatch(categoriesFetched(categories)),
  };
}

const API = api.category.list();
const CategoryList = withDataFrom(API)(
  withLoadingSpinner(listOf(ListGroup, CategoryItem)),
);

CategoryList.propTypes = {
  onDataFetched: func.isRequired,
  items: arrayOf(CategoryModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryList);
