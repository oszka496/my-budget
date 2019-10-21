import React, { useState } from 'react';
import { Dialog, DialogContent } from '@material-ui/core';
import AddNoteIcon from '@material-ui/icons/NoteAdd';
import { MenuButton } from 'components/menu';
import TransactionForm from './TransactionForm';

const AddTransaction = () => {
  const [isOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <MenuButton text="Add transaction" onClick={openModal} icon={AddNoteIcon} />
      <Dialog onClose={closeModal} open={isOpen}>
        <DialogContent>
          <TransactionForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTransaction;
