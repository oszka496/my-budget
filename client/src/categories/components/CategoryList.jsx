import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListSubheader } from '@material-ui/core';
import { selectCategoriesAll } from 'categories/category.selectors';
import { CategoryItem, AllTransactionsItem } from './CategoryItem';

export const CategoryList = () => {
  const categories = useSelector(selectCategoriesAll);

  return (
    <List
      dense
      component="nav"
      aria-label="categories nav list"
      subheader={(
        <ListSubheader component="div">
            Categories
        </ListSubheader>
      )}
    >
      <AllTransactionsItem />
      { categories.map(({ id, name }) => <CategoryItem name={name} key={id} />)}
    </List>
  );
};
