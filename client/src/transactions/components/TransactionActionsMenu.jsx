import React from 'react';
import { useDispatch } from 'react-redux';
import { func, string, oneOfType, object } from 'prop-types';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { transactionActions as actions } from '../transaction.slice';

export const TransactionActionsMenu = ({ id, anchorEl, handleClose }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(actions.deleteStart(id));
  const handleDelete = () => {
    deleteItem();
    handleClose();
  };

  return (
    <Menu
      id="transaction-actions-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>
      <MenuItem onClick={handleDelete}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
    </Menu>
  );
};
TransactionActionsMenu.propTypes = {
  id: string.isRequired,
  handleClose: func.isRequired,
  anchorEl: oneOfType([func, object]),
};
