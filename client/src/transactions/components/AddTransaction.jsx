import React from 'react';
import AddNoteIcon from '@material-ui/icons/NoteAdd';
import { MenuButton } from 'components/menu';
import NewTransactionDialog from './NewTransactionDialog';
import { useModal } from '../../utils/hooks';

const AddTransaction = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <MenuButton text="Add transaction" onClick={openModal} icon={AddNoteIcon} />
      {isOpen && <NewTransactionDialog isOpen={isOpen} closeModal={closeModal} />}
    </>
  );
};

export default AddTransaction;
