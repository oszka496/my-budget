import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoriesAction } from '../store/actions';
import CategoryModel from "../models/category.model";

class CategoryList extends Component {
    render() {
        const { categoriesIds, categories } = this.props;
        return (
            <ul className="category-list">
                {categoriesIds.map(id => categories[id]).map(category => (<li>{category.name}</li>))}
            </ul>
        )
    }

    componentDidMount() {
        const API = "https://jsonplaceholder.typicode.com/comments/";

        fetch(API)
        .then(response => response.json())
        .then(data => {
            const categories = data.reduce((obj, entry) => {
                obj[entry.id] = new CategoryModel(entry['name'], entry['id']);
                return obj;
            }, {});
            this.props.fetchCategories(categories);
        });
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCategories: (categories) => dispatch(fetchCategoriesAction(categories)),
    }
}

function mapStateToProps(state) {
    return {
        categoriesIds: state.categories.ids,
        categories: state.categories.entities,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
