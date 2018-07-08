import { connect } from 'react-redux';
import { arrayOf, func, shape } from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import { categoriesFetched } from '../../store/actions';
import { selectCategoriesAll } from '../../store/selectors';
import CategoryItem from './CategoryItem';
import { listOf, withDataFrom } from '../../hocs/index';
import CategoryModel from '../../models/category.model';

function mapStateToProps(state) {
  return {
    items: selectCategoriesAll(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDataFetched: categories => dispatch(categoriesFetched(categories)),
  };
}

const API = 'http://localhost:8000/api/categories/';
const CategoryList = withDataFrom(API)(listOf(ListGroup, CategoryItem));

CategoryList.propTypes = {
  onDataFetched: func.isRequired,
  items: arrayOf(shape(CategoryModel)).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
