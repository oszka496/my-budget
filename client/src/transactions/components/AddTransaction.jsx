import React, { useState } from 'react';
import AddNoteIcon from '@material-ui/icons/NoteAdd';
import { MenuButton } from 'components/menu';
import NewTransactionDialog from './NewTransactionDialog';

const AddTransaction = () => {
  const [isOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <MenuButton text="Add transaction" onClick={openModal} icon={AddNoteIcon} />
      <NewTransactionDialog isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddTransaction;
