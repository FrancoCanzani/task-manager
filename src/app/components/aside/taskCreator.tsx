'use client';

import { FormEvent, useState } from 'react';
import useIsOpen from '@/hooks/useIsOpen';

import CreatorButton from './creatorButton';

export default function TaskCreator() {
  const { isOpen, handleOpen } = useIsOpen();
  const [task, setTask] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className='bg-gray-200 flex flex-col items-center rounded-md p-3'>
      <CreatorButton text={'Tasks'} isOpen={isOpen} handleOpen={handleOpen} />
      <form
        onSubmit={handleAddTask}
        className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div>
          <label htmlFor='name' className='hidden'>
            Name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Task'
            autoComplete='off'
            className='w-full rounded-md px-2 py-1'
          />
        </div>
        <div className='mt-2'>
          <label htmlFor='name' className='hidden'>
            Label
          </label>
          <input
            type='text'
            autoComplete='off'
            id='name'
            placeholder='Label'
            className='w-full rounded-md px-2 py-1'
          />
        </div>
        <div className='mt-2'>
          <select
            name='priority'
            id='priority'
            className='w-full px-2 py-1 rounded-md'
          >
            <option value='low' className='text-gray-400'>
              --Priority--
            </option>
            <option value='High'>High</option>
            <option value='Medium'>Medium</option>
            <option value='Low'>Low</option>
          </select>
        </div>
        <div className='mt-2'>
          <textarea
            name='description'
            id='description'
            placeholder='Description'
            className='rounded-md px-2 py-1 w-full'
          ></textarea>
        </div>
        <button
          type='submit'
          className='bg-white hover:bg-gray-100 px-2 py-1 rounded-md text-sm font-semibold'
        >
          Save
        </button>
      </form>
    </div>
  );
}
