import React from 'react';
import PropTypes from 'prop-types';
import { Col, Grid, ListGroupItem, Row } from 'react-bootstrap';

const TransactionItem = ({ title, category, amount, is_income }) => (
  <ListGroupItem>
    <Grid>
      <Row>
        <Col md={8}>{title}</Col>
        <Col md={4}>
          {is_income ? '+' : '-'}
          {amount}
        </Col>
      </Row>
      <Row>
        <Col md={12}>category: {category}</Col>
      </Row>
    </Grid>
  </ListGroupItem>
);

TransactionItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TransactionItem;
