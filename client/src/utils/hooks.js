import React from 'react';

export const useModal = () => {
  const [isOpen, setOpen] = React.useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return { isOpen, openModal, closeModal };
};
