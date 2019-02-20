import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import api from '../../api';
import { transactionsNew } from '../transaction.actions';
import { selectCategoriesAll } from '../../categories/category.selectors';
import CategoryModel from '../../categories/category.model';
import { raiseError } from '../../core/message.actions';
import TransactionFormBody from './TransactionFormBody';


const mapStateToProps = state => ({
  categories: selectCategoriesAll(state),
});

const mapDispatchToProps = dispatch => ({
  onItemCreated: transaction => dispatch(transactionsNew(transaction)),
  onPostFailed: error => dispatch(raiseError(error.toString())),
});


class TransactionForm extends Component {
  onSubmit = body => {
    const TRANSACTIONS_API = api.transaction.list();
    const { onItemCreated, onPostFailed } = this.props;
    api.requests
      .post(TRANSACTIONS_API, body)
      .then(onItemCreated)
      .catch(onPostFailed);
  };

  render() {
    const { categories } = this.props;
    return (
      <TransactionFormBody
        onSubmit={this.onSubmit}
        categories={categories}
        item={{
          user: 1,
          amount: '0',
          title: '',
          isIncome: false,
          date: new Date().toJSON().split('T')[0],
        }}
      />
    );
  }
}

TransactionForm.propTypes = {
  onItemCreated: PropTypes.func.isRequired,
  onPostFailed: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionForm);
