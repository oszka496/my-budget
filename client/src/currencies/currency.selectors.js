import { createSelector } from 'reselect';
import { adapter } from 'utils/adapter';

const selectors = adapter.getSelectors('currencies');

export const selectCurrenciesAll = selectors.selectItemsList;
export const selectCurrenciesAreLoaded = createSelector(selectors.selectItems, state => state.isLoaded);
