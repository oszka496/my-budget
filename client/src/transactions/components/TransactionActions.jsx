import React, { useState } from 'react';
import { number } from 'prop-types';
import { IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { TransactionActionsMenu } from './TransactionActionsMenu';

export const TransactionActions = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = ({ currentTarget }) => setAnchorEl(currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreIcon />
      </IconButton>
      <TransactionActionsMenu id={id} anchorEl={anchorEl} handleClose={handleClose} />
    </>
  );
};
TransactionActions.propTypes = {
  id: number.isRequired,
};
