import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, ListGroupItem, Row } from 'react-bootstrap';

const TransactionItem = ({ title, category, amount, isIncome }) => (
  <ListGroupItem>
    <Grid>
      <Row>
        <Col md={8}>{title}</Col>
        <Col md={4}>{`${isIncome ? '+' : '-'}${amount}`}</Col>
      </Row>
      <Row>
        <Col md={12}>category: {category}</Col>
      </Row>
    </Grid>
  </ListGroupItem>
);

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
  isIncome: PropTypes.bool.isRequired,
};

export default TransactionItem;
