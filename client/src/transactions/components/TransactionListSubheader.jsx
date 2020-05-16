import React from 'react';
import { string } from 'prop-types';
import { ListSubheader, makeStyles } from '@material-ui/core';

const useSubheaderStyles = makeStyles({
  root: {
    paddingLeft: 0,
    lineHeight: '36px',
  },
},
{ name: TransactionListSubheader.name });

export function TransactionListSubheader({ title }) {
  const classes = useSubheaderStyles();
  return (
    <ListSubheader component="div" className={classes.root}>
      {title}
    </ListSubheader>
  );
}
TransactionListSubheader.propTypes = {
  title: string.isRequired,
};
