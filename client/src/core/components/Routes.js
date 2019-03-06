import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CategoryLayout } from 'categories/components';
import { TransactionLayout } from 'transactions/components';
import { ProfileLayout } from 'profile/components';


export default () => (
  <Switch>
    <Route path="/categories" component={CategoryLayout} />
    <Route path="/profile" component={ProfileLayout} />
    <Route path="/transactions" component={TransactionLayout} />
    <Route render={() => (<Redirect to="/transactions" />)} />
  </Switch>
);
