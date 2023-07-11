'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';

import rightArrow from '../../../../public/svg/keyboardArrowRight.svg';
import downArrow from '../../../../public/svg/keyboardArrowDown.svg';

export default function TaskCreator() {
  const [isOpen, setIsOpen] = useState(true);
  const [task, setTask] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
  }

  const handleOpen = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <div className='bg-gray-200 flex flex-col items-center rounded-md p-3'>
      <button
        onClick={handleOpen}
        className='flex items-center justify-between w-60'
      >
        <span className='mr-1 text-lg font-semibold'>Tasks</span>
        <Image
          src={isOpen ? downArrow : rightArrow}
          alt='Right arrow'
          width={20}
          height={20}
        />
      </button>
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
            value={task}
            id='name'
            placeholder='Task'
            className='w-full rounded-md px-2 py-1'
          />
        </div>
        <div className='mt-2'>
          <label htmlFor='name' className='hidden'>
            Label
          </label>
          <input
            type='text'
            value={task}
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
            <option value='low'>--Priority--</option>
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
          className='bg-white px-2 py-1 rounded-md text-sm font-semibold'
        >
          Save
        </button>
      </form>
    </div>
  );
}
