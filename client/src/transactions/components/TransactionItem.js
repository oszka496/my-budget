import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemSecondaryAction, ListItemText, Typography } from '@material-ui/core';
import { useModal } from 'utils/hooks';
import { TransactionActions } from './TransactionActions';
import NewTransactionDialog from './NewTransactionDialog';
import TransactionModel from '../transaction.model';

const displayAmount = ({ amount, isIncome, currency }) => `${isIncome ? '+' : '-'}${amount} ${currency}`;

const TransactionItem = ({ transaction, showCategory }) => {
  const { id, title, categoryName, amount, isIncome, currency } = transaction;
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <ListItem>
        <ListItemText primary={title} secondary={showCategory && categoryName} />
        <Typography variant="body2">{displayAmount({ amount, isIncome, currency })}</Typography>
        <ListItemSecondaryAction>
          <TransactionActions id={id} openEditModal={openModal} />
        </ListItemSecondaryAction>
      </ListItem>
      {isOpen && (
        <NewTransactionDialog
          isOpen={isOpen}
          closeModal={closeModal}
          item={transaction}
        />
      )}
    </>
  );
};

TransactionItem.propTypes = {
  transaction: TransactionModel,
  showCategory: PropTypes.bool,
};

export default TransactionItem;
