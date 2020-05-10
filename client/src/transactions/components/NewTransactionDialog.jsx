import React, { useState } from 'react';
import { bool, func, arrayOf, string } from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { Form } from 'components/form';
import CategoryModel from 'categories/category.model';
import { selectCategoriesAll } from 'categories/category.selectors';
import { getDefaultCurrency } from 'profile/profile.selectors';
import { transactionActions as actions } from '../transaction.slice';
import TransactionFormFields from './TransactionFormFields';
import TransactionModel from '../transaction.model';

const createEmptyTransaction = () => ({
  id: uuid.v4(),
  amount: '0',
  title: '',
  isIncome: false,
  date: new Date().toJSON().split('T')[0],
});

export const TransactionDialog = ({
  isOpen,
  closeModal,
  item,
  save,
  currency,
  categories,
}) => {
  const [fields, setFields] = useState(item || createEmptyTransaction());

  const handleChange = ({ target: { name, value } }) => {
    let { isIncome } = fields;
    if (name === 'category') { // Change operation type to category's default
      isIncome = categories.find(({ id }) => id === value).isIncome;
    }
    setFields({ ...fields, isIncome, [name]: value });
  };

  const onSubmit = () => {
    save({ ...fields, currency });
    closeModal();
  };

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogTitle>Add new transaction</DialogTitle>
      <DialogContent>
        <Form onSubmit={onSubmit}>
          <TransactionFormFields
            currency={currency}
            item={fields}
            categories={categories}
            handleChange={handleChange}
          />
          <DialogActions>
            <Button color="primary" onClick={closeModal}>Cancel</Button>
            <Button variant="outlined" color="primary" type="submit">Save</Button>
          </DialogActions>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
TransactionDialog.propTypes = {
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
  save: func.isRequired,
  currency: string.isRequired,
  categories: arrayOf(CategoryModel).isRequired,
  item: TransactionModel,
};

const mapStateToProps = state => ({
  currency: getDefaultCurrency(state),
  categories: selectCategoriesAll(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  save: transaction => dispatch(
    ownProps.item ? actions.editStart(transaction) : actions.createStart(transaction),
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionDialog);
