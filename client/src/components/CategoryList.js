import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategoriesAction } from '../store/actions';
import CategoryModel from '../models/category.model';

function mapStateToProps(state) {
  return {
    categoriesIds: state.categories.ids,
    categories: state.categories.entities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: categories => dispatch(fetchCategoriesAction(categories)),
  };
}

class CategoryList extends Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    const API = 'https://jsonplaceholder.typicode.com/comments/';

    fetch(API)
      .then(response => response.json())
      .then(data => {
        const categories = data.reduce(
          (obj, entry) => ({
            ...obj,
            [entry.id]: new CategoryModel(entry.name, entry.id),
          }),
          {}
        );
        fetchCategories(categories);
      });
  }

  render() {
    const { categoriesIds, categories } = this.props;
    return (
      <ul className="category-list">
        {categoriesIds
          .map(id => categories[id])
          .map(category => <li key={category.id}>{category.name}</li>)}
      </ul>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.shape({
    id: PropTypes.shape(CategoryModel),
  }).isRequired,
  categoriesIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
