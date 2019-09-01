import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { withDataFrom, withLoadingSpinner } from 'hocs';
import api from 'api';
import { TransactionForm, TransactionList } from 'transactions/components';
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
  <Grid container spacing={2}>
    <Grid item md={6}>
      <Route path="/" component={TransactionList} />
    </Grid>
    <Grid item md={6}>
      <Route path="/" component={TransactionForm} />
    </Grid>
  </Grid>
);

const CATEGORY_API = api.category.list();
const TransactionLayout = withDataFrom(CATEGORY_API)(withLoadingSpinner(Layout));

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionLayout);
