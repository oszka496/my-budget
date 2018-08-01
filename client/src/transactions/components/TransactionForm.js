import React, { Component } from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../api';
import { transactionsNew } from '../transaction.actions';
import { formatApiResponse } from '../../utils/stringUtils';
import LabeledInput from '../../shared/LabeledInput';
import { selectCategoriesAll } from '../../categories/category.selectors';
import CategoryModel from '../../categories/category.model';

const mapStateToProps = state => ({
  categories: selectCategoriesAll(state),
});

const mapDispatchToProps = dispatch => ({
  onItemCreated: transaction => dispatch(transactionsNew(transaction)),
});


class TransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: 1,
      amount: 0,
      title: '',
      isIncome: false,
      date: new Date().toJSON().split('T')[0],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleIsIncomeChange = this.handleIsIncomeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidCatch(error) {
    console.log(error);
  }

  handleSubmit(event) {
    const TRANSACTIONS_API = api.transaction.list();
    const { isIncome } = this.state;
    const { onItemCreated } = this.props;
    fetch(TRANSACTIONS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...this.state, is_income: isIncome }), // TODO: Kill this hack
    })
      .then(response => {
        if (response.status < 200 || response.status > 299) {
          throw new Error('Something went wrong');
        }
        return response.json();
      })
      .then(formatApiResponse)
      .then(onItemCreated)
      .catch(() => {}); // TODO: Actually handle it

    event.preventDefault();
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleIsIncomeChange({ target: { value } }) {
    this.setState({ isIncome: value === 'income' });
  }

  render() {
    const { amount, isIncome, title, date } = this.state;
    const { categories } = this.props;
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
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl name="category" componentClass="select" placeholder="select" onChange={this.handleChange}>
            <option value="">---</option>
            {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
          </FormControl>
        </FormGroup>
        <FormGroup>
          <Radio name="isIncome" value="income" checked={isIncome} onChange={this.handleIsIncomeChange} inline>
            Income
          </Radio>
          <Radio name="isIncome" value="expense" checked={!isIncome} onChange={this.handleIsIncomeChange} inline>
            Expense
          </Radio>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

TransactionForm.propTypes = {
  onItemCreated: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(CategoryModel).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionForm);
