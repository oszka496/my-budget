import React from 'react';
import { Route } from 'react-router-dom';
import { Col, Panel, Row } from 'react-bootstrap';
import { connect } from 'react-redux';

import { withDataFrom, withLoadingSpinner } from 'hocs';
import api from 'api';
import { TransactionList, TransactionForm } from 'transactions/components';
import { categoriesFetched } from 'categories/category.actions';
import { raiseError } from 'core/message.actions';


const mapStateToProps = (state) => ({
  isLoaded: state.categories.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: categories => dispatch(categoriesFetched(categories)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
});

const Layout = () => (
  <Row>
    <Col md={6}>
      <Panel bsStyle="primary">
        <Panel.Heading>Transactions</Panel.Heading>
        <Panel.Body>
          <Route path="/" component={TransactionList} />
        </Panel.Body>
      </Panel>
    </Col>
    <Col md={6}>
      <Panel>
        <Panel.Body>
          <Route path="/" component={TransactionForm} />
        </Panel.Body>
      </Panel>
    </Col>
  </Row>
);

const CATEGORY_API = api.category.list();
const TransactionLayout = withDataFrom(CATEGORY_API)(withLoadingSpinner(Layout));

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionLayout);
