import { createSelector } from '@reduxjs/toolkit';
import { adapter } from 'utils/adapter';
import { ACTION_STATUS } from '../utils/actions.utils';

const selectors = adapter.getSelectors('currencies');

export const selectCurrenciesAll = selectors.selectItemsList;
export const selectCurrenciesAreLoaded = createSelector(
  selectors.selectItems,
  state => state.fetchStatus === ACTION_STATUS.SUCCESS,
);
