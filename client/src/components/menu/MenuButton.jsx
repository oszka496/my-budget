import React from 'react';
import { func, string, elementType } from 'prop-types';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export const MenuButton = ({ text, icon: Icon, onClick }) => (
  <ListItem dense button onClick={onClick}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);
MenuButton.propTypes = {
  text: string.isRequired,
  icon: elementType.isRequired,
  onClick: func.isRequired,
};
