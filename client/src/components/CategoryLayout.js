import React from 'react';
import CategoryList from "./CategoryList";
import { Route } from 'react-router-dom';

function CategoryLayout() {
    return <Route path='/' component={CategoryList} />
}

export default CategoryLayout
