import React, { useState } from 'react';
import { bool, func, arrayOf } from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { Form } from 'components/form';
import CategoryModel from 'categories/category.model';
import { selectCategoriesAll } from 'categories/category.selectors';
import { addTransaction } from '../transaction.actions';
import TransactionFormFields from './TransactionFormFields';

const createEmptyTransaction = () => ({
  id: uuid.v4(),
  amount: '0',
  title: '',
  isIncome: 'OUT',
  date: new Date().toJSON().split('T')[0],
});

export const TransactionDialog = ({ isOpen, closeModal, saveTransaction, categories }) => {
  const [fields, setFields] = useState(createEmptyTransaction());

  const handleChange = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
  };

  const closeAndClear = () => {
    closeModal();
    setFields(createEmptyTransaction());
  };

  const save = () => {
    saveTransaction({ ...fields, isIncome: fields.isIncome === 'IN' });
    closeAndClear();
  };

  return (
    <Dialog onClose={closeModal} open={isOpen}>
      <DialogTitle>Add new transaction</DialogTitle>
      <DialogContent>
        <Form onSubmit={save}>
          <TransactionFormFields item={fields} categories={categories} handleChange={handleChange} />
          <DialogActions>
            <Button color="primary" onClick={closeAndClear}>Cancel</Button>
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
  saveTransaction: func.isRequired,
  categories: arrayOf(CategoryModel).isRequired,
};

const mapStateToProps = state => ({
  categories: selectCategoriesAll(state),
});

const mapDispatchToProps = {
  saveTransaction: addTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionDialog);
