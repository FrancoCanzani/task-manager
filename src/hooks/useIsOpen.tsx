'use client';

import { useState } from 'react';

export default function useIsOpen() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return { isOpen, handleOpen };
}
