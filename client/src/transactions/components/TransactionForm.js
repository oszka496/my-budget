import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { TransactionFormBody } from 'transactions/components';
import { addTransaction } from 'transactions/transaction.actions';
import { selectCategoriesAll } from 'categories/category.selectors';
import CategoryModel from 'categories/category.model';

const createEmptyTransaction = () => ({
  id: uuid.v4(),
  amount: '0',
  title: '',
  isIncome: 'OUT',
  date: new Date().toJSON().split('T')[0],
});

const mapStateToProps = state => ({
  categories: selectCategoriesAll(state),
});

const mapDispatchToProps = {
  onSubmit: addTransaction,
};

const TransactionForm = ({ categories, onSubmit }) => (
  <TransactionFormBody
    onSubmit={onSubmit}
    categories={categories}
    item={createEmptyTransaction()}
  />
);

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionForm);
