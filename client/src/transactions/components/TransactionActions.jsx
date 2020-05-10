import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import { TransactionActionsMenu } from './TransactionActionsMenu';

export const TransactionActions = ({ id, openEditModal }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = ({ currentTarget }) => setAnchorEl(currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton edge="end" onClick={handleOpen}>
        <MoreIcon />
      </IconButton>
      <TransactionActionsMenu id={id} anchorEl={anchorEl} handleClose={handleClose} onEditClick={openEditModal} />
    </>
  );
};
TransactionActions.propTypes = {
  id: PropTypes.string.isRequired,
  openEditModal: PropTypes.func.isRequired,
};
