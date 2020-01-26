import React, { useState } from 'react';
import { string } from 'prop-types';
import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import AllIcon from '@material-ui/icons/AllInclusive';
import { coreRoutes } from 'core/core.routes';
import { AdapterLink } from '../../components/AdapterLink';
import { ItemActions } from './CategoryItemActions';

export const AllTransactionsItem = () => (
  <ListItem dense button component={AdapterLink} to={coreRoutes.transactions.href}>
    <ListItemIcon>
      <AllIcon color="primary" />
    </ListItemIcon>
    <ListItemText primary="All transactions" />
  </ListItem>
);

export const CategoryItem = ({ name }) => {
  const [actionsVisible, setVisibility] = useState(false);
  const showActions = () => setVisibility(true);
  const hideActions = () => setVisibility(false);

  const eventHandlers = {
    onMouseEnter: showActions,
    onMouseLeave: hideActions,
    onFocus: showActions,
    onBlur: hideActions,
  };

  return (
    <div {...eventHandlers}>
      <ListItem dense button component="a" href={`${coreRoutes.transactions.href}#${name}`}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={name} />
        <ListItemSecondaryAction>
          { actionsVisible && <ItemActions /> }
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};
CategoryItem.propTypes = {
  name: string.isRequired,
};
