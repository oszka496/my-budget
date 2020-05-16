import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListSubheader } from '@material-ui/core';
import { selectCategoriesAll } from 'categories/category.selectors';
import { useURLSearchParams } from 'utils/router.utils';
import { CategoryItem, AllTransactionsItem } from './CategoryItem';

export const CategoryList = () => {
  const categories = useSelector(selectCategoriesAll);
  const query = useURLSearchParams();
  const categoryId = query.get('category');

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
      <AllTransactionsItem selected={!categoryId} />
      { categories.map(({ id, name }) => <CategoryItem id={id} name={name} key={id} selected={id === categoryId} />)}
    </List>
  );
};
