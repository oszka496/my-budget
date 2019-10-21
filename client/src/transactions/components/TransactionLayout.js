import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { withDataFrom, withLoadingSpinner } from 'hocs';
import api from 'api';
import { TransactionList } from 'transactions/components';
import { categoriesFetched } from 'categories/category.actions';
import { CategoryList } from 'categories/components';
import { raiseError } from 'core/message.actions';
import { AppLayout } from 'components/AppLayout';
import AddTransaction from './AddTransaction';


const mapStateToProps = (state) => ({
  isLoaded: state.categories.isLoaded,
});

const mapDispatchToProps = dispatch => ({
  onDataFetched: categories => dispatch(categoriesFetched(categories)),
  onFetchFailed: error => dispatch(raiseError(error.toString())),
});

const Layout = () => (
  <AppLayout
    leftMenu={() => (
      <>
        <AddTransaction />
        <CategoryList />
      </>
    )}
    content={() => <Route path="/" component={TransactionList} />}
  />
);

const CATEGORY_API = api.category.list();
const TransactionLayout = withDataFrom(CATEGORY_API)(withLoadingSpinner(Layout));

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionLayout);
