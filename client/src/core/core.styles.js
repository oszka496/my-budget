import { makeStyles } from '@material-ui/core';

export const useCoreStyles = makeStyles((theme) => ({
  container: {
    maxWidth: theme.breakpoints.values.lg,
    margin: 'auto',
    width: '100%',
  },
}));
