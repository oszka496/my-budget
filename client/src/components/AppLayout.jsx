import React from 'react';
import { node } from 'prop-types';
import { Grid } from '@material-ui/core';

export const AppLayout = ({ leftMenu: Menu, content: Content }) => (
  <Grid container spacing={2}>
    <Grid item md={3}>
      <Menu />
    </Grid>
    <Grid item md={9}>
      <Content />
    </Grid>
  </Grid>
);
AppLayout.propTypes = {
  leftMenu: node,
  content: node.isRequired,
};
