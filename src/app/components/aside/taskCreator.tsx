'use client';

import { FormEvent, useState } from 'react';

export default function TaskCreator({ tasks, setTasks }) {
  const [task, setTask] = useState('');

  function handleAddTask(e: FormEvent) {
    e.preventDefault();
    setTasks([...tasks, task]);
  }
  return (
    <form onSubmit={handleAddTask}>
      <div>
        <label htmlFor='name' className='hidden'>
          Name
        </label>
        <input
          type='text'
          value={task}
          id='name'
          placeholder='Task name'
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <button type='submit'>Go</button>
    </form>
  );
}
