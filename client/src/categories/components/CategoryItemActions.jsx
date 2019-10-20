import React from 'react';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export const ItemActions = () => (
  <>
    <IconButton edge="end" aria-label="edit category">
      <EditIcon />
    </IconButton>
    <IconButton edge="end" aria-label="delete category">
      <DeleteIcon />
    </IconButton>
  </>
);
