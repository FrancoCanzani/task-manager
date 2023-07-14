'use client';

import Link from 'next/link';
import Aside from '../components/aside/aside';
import Header from '../components/header/header';
import { useState } from 'react';

enum Active {
  Tasks = 'tasks',
  Notes = 'notes',
}

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [active, setActive] = useState<Active>(Active.Tasks);

  return (
    <main className='flex min-h-screen'>
      <Aside />
      <div className='w-full min-h-screen flex flex-col'>
        <Header />
        <div className=''>
          <div className='bg-gray-300 px-8 pt-11 '>
            <Link
              href='/tasks'
              onClick={() => setActive(Active.Tasks)}
              className={`${
                active == Active.Tasks ? 'opacity-100 py-2' : 'opacity-60'
              } mr-3 font-bold text-xl rounded-t-md bg-cyan-500 px-3 py-1`}
            >
              Tasks
            </Link>
            <Link
              href='/notes'
              onClick={() => setActive(Active.Notes)}
              className={`${
                active == Active.Notes ? 'opacity-100 py-2' : 'opacity-60'
              } font-bold text-xl rounded-t-md bg-yellow-200 px-3 py-1`}
            >
              Notes
            </Link>
          </div>
          <section className='bg-white w-full p-8 flex-grow'>
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
