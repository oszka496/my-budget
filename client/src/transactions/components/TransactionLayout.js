import React from 'react';
import { Route } from 'react-router-dom';
import { Col, Panel, Row } from 'react-bootstrap';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';

function TransactionLayout() {
  return (
    <Row>
      <Col md={6}>
        <Panel bsStyle="primary">
          <Panel.Heading>Transactions</Panel.Heading>
          <Panel.Body>
            <Route path="/" component={TransactionList} />
          </Panel.Body>
        </Panel>
      </Col>
      <Col md={6}>
        <Panel>
          <Panel.Body>
            <Route path="/" component={TransactionForm} />
          </Panel.Body>
        </Panel>
      </Col>
    </Row>
  );
}

export default TransactionLayout;
