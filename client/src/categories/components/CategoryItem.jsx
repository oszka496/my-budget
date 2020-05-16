import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import AllIcon from '@material-ui/icons/AllInclusive';
import { coreRoutes } from 'core/core.routes';
import { AdapterLink } from '../../components/AdapterLink';
import { ItemActions } from './CategoryItemActions';

export const AllTransactionsItem = ({ selected }) => (
  <ListItem dense button component={AdapterLink} to={coreRoutes.transactions.href} selected={selected}>
    <ListItemIcon>
      <AllIcon color="primary" />
    </ListItemIcon>
    <ListItemText primary="All transactions" />
  </ListItem>
);
AllTransactionsItem.propTypes = {
  selected: PropTypes.bool,
};

export const CategoryItem = ({ id, name, selected }) => {
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
      <ListItem
        dense
        button
        component={AdapterLink}
        to={`${coreRoutes.transactions.href}?category=${id}`}
        selected={selected}
      >
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};
