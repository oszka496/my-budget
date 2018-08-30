import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CategoryLayout } from '../../categories/components';
import { TransactionLayout } from '../../transactions/components';


export default () => (
  <Switch>
    <Route path="/categories" component={CategoryLayout} />
    <Route path="/transactions" component={TransactionLayout} />
    <Route render={() => (<Redirect to="/transactions" />)} />
  </Switch>
);
