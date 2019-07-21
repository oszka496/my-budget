import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CategoryLayout } from 'categories/components';
import { TransactionLayout } from 'transactions/components';
import { ProfileLayout } from 'profile/components';


export const createRedirect = (history, path) => () => { history.push(path); };

export const routes = {
  categories: { href: '/categories', component: CategoryLayout, label: 'Categories' },
  profile: { href: '/profile', component: ProfileLayout, label: 'Settings' },
  transactions: { href: '/transactions', component: TransactionLayout, label: 'Transactions' },
};

export default () => (
  <Switch>
    { Object.entries(routes).map(([key, route]) => <Route path={route.href} component={route.component} key={key} />) }
    <Route render={() => (<Redirect to={routes.transactions.href} />)} />
  </Switch>
);
