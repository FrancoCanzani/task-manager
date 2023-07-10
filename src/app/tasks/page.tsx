'use client';

import { useContext } from 'react';
import TasksContext from './tasksContext';

export default function TasksHome() {
  const tasks = useContext(TasksContext);
  return <section className='py-6 px-4'>{tasks}</section>;
}
