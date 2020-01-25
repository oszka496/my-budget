import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { RadioOptions, LabeledSelect } from 'components/form';
import CategoryModel from 'categories/category.model';


const TransactionFormFields = ({ item, categories, handleChange }) => {
  const { amount, title, date, isIncome, category } = item;

  return (
    <>
      <TextField
        required
        name="title"
        label="Title"
        value={title}
        onChange={handleChange}
      />
      <TextField
        required
        name="amount"
        label="Amount"
        value={amount}
        onChange={handleChange}
        type="number"
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
        value={isIncome}
        onChange={handleChange}
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
    isIncome: PropTypes.oneOf(['IN', 'OUT']).isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default TransactionFormFields;