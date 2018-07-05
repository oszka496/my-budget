import React from 'react';
import { Route } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import CategoryList from './CategoryList';

function CategoryLayout() {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading>Categories</Panel.Heading>
      <Panel.Body>
        <Route path="/" component={CategoryList} />
      </Panel.Body>
    </Panel>
  );
}

export default CategoryLayout;
