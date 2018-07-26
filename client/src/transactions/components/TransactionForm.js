import React, { Component } from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Radio,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../api';
import { transactionsNew } from '../transaction.actions';
import { formatApiResponse } from '../../utils/stringUtils';

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
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleIsInputChange = this.handleIsInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const TRANSACTIONS_API = api.transaction.list();
    const { isIncome } = this.state;
    fetch(TRANSACTIONS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...this.state, is_income: isIncome }), // TODO: Kill this hack
    })
      .then(response => {
        if (response.status !== 201) {
          console.log('Something went wrong'); // TODO: Actually handle it
        } else {
          const { onItemCreated } = this.props;
          response.json()
            .then(formatApiResponse)
            .then(onItemCreated);
        }
      });

    event.preventDefault();
  }

  handleChange(event) {
    const { target } = event;
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleIsInputChange(event) {
    const isIncome = event.target.name === 'isIncome';
    this.setState({ isIncome });
  }

  render() {
    const { amount, isIncome, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
          <ControlLabel>Title</ControlLabel>
          <FormControl
            name="title"
            type="text"
            value={title}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Amount</ControlLabel>
          <FormControl
            name="amount"
            type="number"
            step=".01"
            value={amount}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Radio name="isIncome" checked={isIncome} onChange={this.handleIsInputChange} inline>
            Income
          </Radio>
          <Radio name="isExpense" checked={!isIncome} onChange={this.handleIsInputChange} inline>
            Expense
          </Radio>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

TransactionForm.propTypes = {
  onItemCreated: PropTypes.func.isRequired,
};

export default connect(
  () => {},
  mapDispatchToProps,
)(TransactionForm);
