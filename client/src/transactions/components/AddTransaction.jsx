import React, { useState } from 'react';
import { Dialog, Button, DialogContent } from '@material-ui/core';
import TransactionForm from './TransactionForm';

const AddTransaction = () => {
  const [isOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Button color="primary" variant="contained" onClick={openModal}>Add transaction</Button>
      <Dialog onClose={closeModal} open={isOpen}>
        <DialogContent>
          <TransactionForm />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTransaction;
