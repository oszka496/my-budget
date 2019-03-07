import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Radio } from 'react-bootstrap';
import { LabeledSelect, LabeledInput } from 'shared';
import CategoryModel from 'categories/category.model';


class TransactionFormBody extends Component {
  constructor(props) {
    super(props);
    this.state = props.item;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: name === 'isIncome' ? value === 'income' : value });
  };

  handleSubmit = (event) => {
    const { onSubmit } = this.props;
    const { isIncome } = this.state;
    const body = JSON.stringify({ ...this.state, is_income: isIncome }); // TODO: Kill this hack
    onSubmit(body);
    event.preventDefault();
  };

  render() {
    const { categories } = this.props;
    const { amount, title, date, isIncome, category } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <LabeledInput label="Title" value={title} type="text" onChange={this.handleChange} required />
        <LabeledInput
          label="Amount"
          value={amount}
          type="number"
          onChange={this.handleChange}
          step=".01"
          min={0.01}
          required
        />
        <LabeledInput label="Date" value={date} type="date" onChange={this.handleChange} required />
        <LabeledSelect
          label="Category"
          value={category}
          options={[{ id: '', name: '---' }, ...categories]}
          onChange={this.handleChange}
        />
        <FormGroup>
          <Radio name="isIncome" value="income" checked={isIncome} onChange={this.handleChange} inline>
            Income
          </Radio>
          <Radio name="isIncome" value="expense" checked={!isIncome} onChange={this.handleChange} inline>
            Expense
          </Radio>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

TransactionFormBody.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isIncome: PropTypes.bool.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default TransactionFormBody;