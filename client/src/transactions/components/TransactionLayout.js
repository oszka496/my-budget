import React from 'react';
import { Route } from 'react-router-dom';
import { Panel } from 'react-bootstrap';
import TransactionList from './TransactionList';

function TransactionLayout() {
  return (
    <Panel bsStyle="primary">
      <Panel.Heading>Transactions</Panel.Heading>
      <Panel.Body>
        <Route path="/" component={TransactionList} />
      </Panel.Body>
    </Panel>
  );
}

export default TransactionLayout;
