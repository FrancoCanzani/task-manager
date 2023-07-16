'use client';

import {
  DocumentData,
  collection,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useEffect, useState } from 'react';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase/firebase';

export default function Tasks() {
  const [tasks, setTasks] = useState<DocumentData>([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const q = query(
          collection(db, 'tasks'),
          where('userId', '==', user.uid)
        );

        onSnapshot(q, (querySnapshot) => {
          let updatedTasks: DocumentData = [];
          querySnapshot.forEach((doc) => {
            updatedTasks.push(doc.data());
          });
          setTasks(updatedTasks);
        });
      }
    });
  }, []);

  return (
    <section className='min-h-full grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {tasks?.length > 0 ? (
        tasks.map((task: DocumentData) => (
          <div
            key={task.taskId}
            className='rounded-md border-4 border-gray-300 bg-white p-3'
          >
            <div>
              <span className='mr-2 bg-zinc-300 p-1 rounded-md font-semibold'>
                {task.label}
              </span>
              <span
                className={`
                    p-1 rounded-md font-semibold
                    ${
                      task.priority === 'High'
                        ? 'bg-red-500'
                        : task.priority === 'Medium'
                        ? 'bg-yellow-500'
                        : 'bg-green-500'
                    }`}
              >
                {task.priority == null ? 'Low' : task.priority}
              </span>
            </div>
            <h2 className='mt-4 font-semibold text-xl'>{task.name}</h2>
            <p className='mt-4 text-gray-500'>
              {task.description == null
                ? 'No description provided'
                : `'${task.description}'`}
            </p>
          </div>
        ))
      ) : (
        <p>Nothing to show yet</p>
      )}
    </section>
  );
}
