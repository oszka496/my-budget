import React from 'react';
import PropTypes from 'prop-types';
import { TextField, InputAdornment } from '@material-ui/core';
import { RadioOptions, LabeledSelect } from 'components/form';
import CategoryModel from 'categories/category.model';


const TransactionFormFields = ({ item, currency, categories, handleChange }) => {
  const { amount, title, date, isIncome, category } = item;

  const handleTransactionTypeChange = ({ target: { name, value } }) => {
    const boolValue = value === 'IN';
    handleChange({ target: { name, value: boolValue } });
  };

  return (
    <>
      <TextField
        required
        name="title"
        label="Title"
        value={title}
        autoFocus
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        name="amount"
        label="Amount"
        value={amount}
        onChange={handleChange}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          startAdornment: <InputAdornment position="start">{currency}</InputAdornment>,
        }}
      />
      <TextField
        required
        name="date"
        label="Date"
        value={date}
        onChange={handleChange}
        type="date"
      />
      <LabeledSelect
        label="Category"
        value={category}
        options={[{ id: '', name: '---' }, ...categories]}
        onChange={handleChange}
      />
      <RadioOptions
        name="isIncome"
        value={isIncome ? 'IN' : 'OUT'}
        onChange={handleTransactionTypeChange}
        options={[
          { label: 'Income', value: 'IN' },
          { label: 'Expense', value: 'OUT' },
        ]}
      />
    </>
  );
};

TransactionFormFields.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isIncome: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  currency: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default TransactionFormFields;
