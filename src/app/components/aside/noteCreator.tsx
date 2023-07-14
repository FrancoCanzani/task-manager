'use client';

import { FormEvent } from 'react';

import CreatorButton from './creatorButton';
import useIsOpen from '@/hooks/useIsOpen';

export default function NoteCreator() {
  const { isOpen, handleOpen } = useIsOpen();

  function handleAddNote(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <div className='bg-yellow-200 mt-6 flex flex-col items-center rounded-md p-3'>
      <CreatorButton text={'Notes'} isOpen={isOpen} handleOpen={handleOpen} />
      <form
        onSubmit={handleAddNote}
        className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <textarea
          name='note'
          id='note'
          placeholder='Note'
          rows={5}
          cols={23}
          className='rounded-md block px-2 py-1 w-full'
        ></textarea>
        <button
          type='submit'
          className='bg-white mt-2 hover:bg-gray-100 px-2 py-1 rounded-md text-sm font-semibold'
        >
          Save
        </button>
      </form>
    </div>
  );
}
