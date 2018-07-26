import React, { Component } from 'react';
import {
  Button,
  ControlLabel,
  FormControl,
  FormGroup,
  Radio,
} from 'react-bootstrap';
import api from '../../api';

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const TRANSACTIONS_API = api.transaction.list();
    fetch(TRANSACTIONS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      });

    event.preventDefault();
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'radio' ? target.checked : target.value;
    this.setState({ [name]: value });
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
        <FormGroup onChange={this.handleChange}>
          <Radio name="isIncome" defaultChecked={isIncome} inline>
            Income
          </Radio>
          <Radio name="isIncome" defaultChecked={!isIncome} inline>
            Expense
          </Radio>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}
export default TransactionForm;
