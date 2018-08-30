/* eslint react/prop-types: 0 */
import React from 'react';
import { render, shallow } from 'enzyme';
import { listOf } from './listOf';

describe('listOf HOC', () => {
  let items;
  const Container = ({ children }) => <div>{children}</div>;
  const Element = ({ id, other }) => <div id={id}>{other}</div>;
  const ListOfElements = listOf(Container, Element);

  beforeEach(() => {
    items = [{ id: 1 }, { id: 2 }];
  });

  it('should generate a component rendering list of elements', () => {
    const list = shallow(<ListOfElements items={items} />);
    expect(list.find(Element)).toHaveLength(2);
  });

  it('should generate a component NOT rendering list of elements on no items', () => {
    const list = shallow(<ListOfElements items={[]} />);
    expect(list.find(Element)).toHaveLength(0);
  });

  it('should pass item to an element', () => {
    const list = shallow(<ListOfElements items={items} />);
    expect(list.find(Element).first().props()).toHaveProperty('id', 1);
  });

  it('should pass other props to elements', () => {
    const list = render(<ListOfElements items={items} other="42" />);
    const firstElement = list.find('div#1');
    expect(firstElement.text()).toEqual('42');
  });
});
