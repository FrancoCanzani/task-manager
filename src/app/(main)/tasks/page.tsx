'use client';

import {
  DocumentData,
  collection,
  onSnapshot,
  query,
} from 'firebase/firestore';
import { db } from '@/firebase/firebase';
import { useEffect, useState } from 'react';

export default function Tasks() {
  const [tasks, setTasks] = useState<DocumentData>([]);

  useEffect(() => {
    const q = query(collection(db, 'tasks'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let updatedTasks: DocumentData = [];
      querySnapshot.forEach((doc) => {
        updatedTasks.push(doc.data());
      });
      setTasks(updatedTasks);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className='min-h-full'>
      {tasks?.length > 0 ? (
        tasks.map((task: DocumentData) => (
          <div key={task.taskId}>{task.name}</div>
        ))
      ) : (
        <p>Nothing to show yet</p>
      )}
    </section>
  );
}
