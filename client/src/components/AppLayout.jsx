import React from 'react';
import { elementType } from 'prop-types';
import { makeStyles } from '@material-ui/core';

const styles = ({ spacing }) => ({
  container: {
    display: 'flex',
    marginTop: spacing(2),
  },
  aside: {
    width: '25%',
  },
  content: {
    flexGrow: 1,
  },
});
const useStyles = makeStyles(styles);

export const AppLayout = ({ leftMenu: Menu, content: Content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        <Menu />
      </aside>
      <div className={classes.content}>
        <Content />
      </div>
    </div>
  );
};
AppLayout.propTypes = {
  leftMenu: elementType,
  content: elementType.isRequired,
};
