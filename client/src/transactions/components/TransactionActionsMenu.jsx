import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ListItemIcon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { transactionActions as actions } from '../transaction.slice';

export const TransactionActionsMenu = ({ id, anchorEl, handleClose, onEditClick }) => {
  const dispatch = useDispatch();
  const deleteItem = () => dispatch(actions.deleteStart(id));
  const withMenuClosing = f => args => {
    handleClose();
    f(args);
  };

  return (
    <Menu
      id="transaction-actions-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={withMenuClosing(onEditClick)}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </MenuItem>
      <MenuItem onClick={withMenuClosing(deleteItem)}>
        <ListItemIcon>
          <DeleteIcon />
        </ListItemIcon>
        <ListItemText primary="Delete" />
      </MenuItem>
    </Menu>
  );
};
TransactionActionsMenu.propTypes = {
  id: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  anchorEl: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onEditClick: PropTypes.func.isRequired,
};
