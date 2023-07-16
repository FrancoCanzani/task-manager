'use client';

import Task from '@/types/taskTypes';

import { v4 as uuidv4 } from 'uuid';

import { FormEvent, useState, useEffect } from 'react';
import useIsOpen from '@/hooks/useIsOpen';

import FeatureOpener from './featureOpener';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app, db } from '../../../firebase/firebase';

import { collection, addDoc } from 'firebase/firestore';
import TaskCreatorForm from './taskCreatorForm';

const auth = getAuth(app);

export default function TaskCreator() {
  const { isOpen, handleOpen } = useIsOpen();
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const [isSaved, setIsSaved] = useState(false);

  const [task, setTask] = useState<Task>({
    name: undefined,
    label: undefined,
    priority: undefined,
    description: undefined,
    userId: undefined,
    taskId: undefined,
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
      setIsSaved(true);
      setErrorMessage(undefined);
      setTimeout(() => {
        setIsSaved(false);
        setTask({
          name: '',
          label: '',
          priority: 'low',
          description: '',
          userId: undefined,
          taskId: undefined,
        });
      }, 2500);
    } catch (error) {
      setErrorMessage(`Something went wrong: ${error}`);
    }
  }

  return (
    <div className='bg-cyan-500 flex flex-col items-center rounded-md p-3'>
      <FeatureOpener text={'Tasks'} isOpen={isOpen} handleOpen={handleOpen} />
      <TaskCreatorForm
        handleAddTask={handleAddTask}
        isOpen={isOpen}
        task={task}
        setTask={setTask}
        errorMessage={errorMessage}
        isSaved={isSaved}
      />
    </div>
  );
}
