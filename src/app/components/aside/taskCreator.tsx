'use client';

import { v4 as uuidv4 } from 'uuid';

import { FormEvent, useState, useEffect } from 'react';
import useIsOpen from '@/hooks/useIsOpen';

import CreatorButton from './creatorButton';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, db } from '../../../firebase/firebase';

import { collection, addDoc } from 'firebase/firestore';

const auth = getAuth(app);

interface taskProps {
  name: string | null;
  label: string | null;
  priority: string | null;
  description: string | null;
  userId: string | null;
  taskId: string | null;
}

export default function TaskCreator() {
  const { isOpen, handleOpen } = useIsOpen();

  const [task, setTask] = useState<taskProps>({
    name: null,
    label: null,
    priority: null,
    description: null,
    userId: null,
    taskId: null,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const taskId = uuidv4();
        setTask({ ...task, userId: uid, taskId: taskId });
      }
    });
  }, []);

  async function handleAddTask(e: FormEvent) {
    e.preventDefault();

    try {
      const taskRef = await addDoc(collection(db, 'tasks'), task);
      console.log('Task added with ID:', taskRef.id);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  }

  return (
    <div className='bg-cyan-500 flex flex-col items-center rounded-md p-3'>
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
            required
            className='w-full rounded-md px-2 py-1'
            onChange={(e) => setTask({ ...task, name: e.target.value })}
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
            required
            className='w-full rounded-md px-2 py-1'
            onChange={(e) => setTask({ ...task, label: e.target.value })}
          />
        </div>
        <div className='mt-2'>
          <select
            name='priority'
            id='priority'
            className='w-full px-2 py-1 rounded-md'
            onChange={(e) => setTask({ ...task, priority: e.target.value })}
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
            onChange={(e) => setTask({ ...task, description: e.target.value })}
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
