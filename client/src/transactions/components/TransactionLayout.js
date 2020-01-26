import React from 'react';
import { Route } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { TransactionList } from 'transactions/components';
import { CategoriesLoader, CategoryList } from 'categories/components';
import { AppLayout } from 'components/AppLayout';
import AddTransaction from './AddTransaction';

const TransactionLayout = () => (
  <CategoriesLoader>
    <AppLayout
      leftMenu={(
        <>
          <AddTransaction />
          <Divider style={{ marginTop: '8px' }} />
          <CategoryList />
        </>
      )}
      content={<Route path="/" component={TransactionList} />}
    />
  </CategoriesLoader>
);

export default TransactionLayout;
