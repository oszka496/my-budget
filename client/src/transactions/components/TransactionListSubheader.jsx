import React from 'react';
import { string } from 'prop-types';
import { ListSubheader, makeStyles } from '@material-ui/core';

const useSubheaderStyles = makeStyles({
  subheader: {
    marginLeft: '16px',
  },
});

export const TransactionListSubheader = ({ title }) => {
  const classes = useSubheaderStyles();
  return (
    <ListSubheader component="div" className={classes.subheader}>
      {title}
    </ListSubheader>
  );
};
TransactionListSubheader.propTypes = {
  title: string.isRequired,
};
