import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CategoryLayout } from 'categories/components';
import { TransactionLayout } from 'transactions/components';
import { SettingsLayout } from 'settings/components';


export default () => (
  <Switch>
    <Route path="/categories" component={CategoryLayout} />
    <Route path="/settings" component={SettingsLayout} />
    <Route path="/transactions" component={TransactionLayout} />
    <Route render={() => (<Redirect to="/transactions" />)} />
  </Switch>
);
