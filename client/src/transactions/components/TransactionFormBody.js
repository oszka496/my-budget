import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { RadioOptions, LabeledSelect } from 'shared';
import CategoryModel from 'categories/category.model';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const TransactionFormBody = ({ item, categories, onSubmit }) => {
  const [fields, setFields] = useState({ ...item });

  const handleChange = ({ target: { name, value } }) => {
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = () => {
    const body = JSON.stringify({ ...fields, is_income: fields.isIncome });
    onSubmit(body);
  };

  const classes = useStyles();
  const { amount, title, date, isIncome, category } = fields;

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
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
      <Button color="primary" type="submit">Submit</Button>
    </form>
  );
};

TransactionFormBody.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isIncome: PropTypes.oneOf(['IN', 'OUT']).isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default TransactionFormBody;
