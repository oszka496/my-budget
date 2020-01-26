import React from 'react';
import { elementType, objectOf, shape, string } from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';

export const createRedirect = (history, path) => () => { history.push(path); };

export const Router = ({ routes, redirect }) => (
  <Switch>
    { Object.entries(routes).map(([key, route]) =>
      <Route path={route.href} component={route.component} key={key} />) }
    <Route render={() => (<Redirect to={redirect} />)} />
  </Switch>
);
Router.propTypes = {
  routes: objectOf(
    shape({
      href: string,
      component: elementType,
    }),
  ).isRequired,
  redirect: string.isRequired,
};
