import React from 'react';
import { arrayOf, shape, oneOfType, number, string } from 'prop-types';

export function listOf(Container, Item) {
  const ListOfHOC = ({ items, ...props }) => (
    <Container>{items.map(item => <Item key={item.id} {...item} {...props} />)}</Container>
  );

  ListOfHOC.propTypes = {
    items: arrayOf(
      shape({
        id: oneOfType([string, number]),
      }),
    ).isRequired,
  };

  return ListOfHOC;
}
