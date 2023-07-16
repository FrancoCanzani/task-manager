'use client';

import Image from 'next/image';

import rightArrow from '../../../../public/svg/keyboardArrowRight.svg';

import { MouseEventHandler } from 'react';

interface CreatorButtonProps {
  text: string;
  isOpen: boolean;
  handleOpen: MouseEventHandler<HTMLButtonElement>;
}

export default function FeatureOpener({
  text,
  isOpen,
  handleOpen,
}: CreatorButtonProps) {
  return (
    <button
      onClick={handleOpen}
      className='flex items-center justify-between w-60'
    >
      <span className='mr-1 text-lg font-semibold'>{text}</span>
      <Image
        src={rightArrow}
        alt='Right arrow'
        width={20}
        height={20}
        className={`transform ${
          isOpen ? 'rotate-90' : 'rotate-0'
        } transition-transform duration-300`}
      />
    </button>
  );
}
