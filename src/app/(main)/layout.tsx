'use client';
import Link from 'next/link';
import Aside from '../components/aside/aside';
import Header from '../components/header/header';

export default function TasksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='flex flex-col min-h-full'>
      <Header />
      <section className='flex-1 flex'>
        <Aside />
        <section className='w-full p-6 bg-gray-200'>
          <div className='px-6'>
            <Link
              href={'/tasks'}
              className='mr-4 font-bold text-xl rounded-t-md bg-cyan-500 px-3 py-1'
            >
              Tasks
            </Link>
            <Link
              href={'/notes'}
              className='rounded-t-md font-bold text-xl bg-yellow-300 px-3 py-1'
            >
              Notes
            </Link>
          </div>
          <div className='bg-white h-full p-6'>{children}</div>
        </section>
      </section>
    </main>
  );
}
