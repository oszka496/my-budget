import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, ListSubheader } from '@material-ui/core';
import { selectCategoriesAll } from 'categories/category.selectors';
import { useCategoryFromUrl } from 'utils/router.utils';
import { CategoryItem, AllTransactionsItem } from './CategoryItem';
import { categoryActions } from '../category.slice';

export const CategoryList = () => {
  const categories = useSelector(selectCategoriesAll);
  const categoryId = useCategoryFromUrl();

  // Sync url with the store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoryActions.categorySelected(categoryId));
  }, [dispatch, categoryId]);

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
