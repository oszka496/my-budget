import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Spinner } from './Spinner';

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateY(-50%)',
  },
};
const useSpinnerStyles = makeStyles(styles);

export const CenteredSpinner = () => {
  const classes = useSpinnerStyles();
  return (
    <div className={classes.container}>
      <div className={classes.spinner}>
        <Spinner />
      </div>
    </div>
  );
};
