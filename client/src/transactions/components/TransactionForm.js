import React, { Component } from 'react';
import { Button, Form, FormGroup, Radio } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../api';
import { transactionsNew } from '../transaction.actions';
import { formatApiResponse } from '../../utils/stringUtils';
import LabeledInput from '../../shared/LabeledInput';

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
          throw new Error('Something went wrong'); // TODO: Actually handle it
        }
        return response.json();
      })
      .then(formatApiResponse)
      .then(onItemCreated);

    event.preventDefault();
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleIsIncomeChange(event) {
    this.setState({ isIncome: event.target.value === 'income' });
  }

  render() {
    const { amount, isIncome, title, date } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <LabeledInput label="Title" value={title} type="text" onChange={this.handleChange} />
        <LabeledInput label="Amount" value={amount} type="number" onChange={this.handleChange} step=".01" />
        <LabeledInput label="Date" value={date} type="date" onChange={this.handleChange} />
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
};

export default connect(
  null,
  mapDispatchToProps,
)(TransactionForm);
