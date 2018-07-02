import React from 'react';
import { Route } from 'react-router-dom';
import CategoryList from './CategoryList';

function CategoryLayout() {
  return <Route path="/" component={CategoryList} />;
}

export default CategoryLayout;
