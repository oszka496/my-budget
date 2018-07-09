import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'react-bootstrap';

const CategoryItem = ({ name }) => <ListGroupItem>{name}</ListGroupItem>;

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
