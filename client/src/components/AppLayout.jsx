import React from 'react';
import { node } from 'prop-types';
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

export const AppLayout = ({ leftMenu, content }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <aside className={classes.aside}>
        {leftMenu}
      </aside>
      <div className={classes.content}>
        {content}
      </div>
    </div>
  );
};
AppLayout.propTypes = {
  leftMenu: node,
  content: node.isRequired,
};
