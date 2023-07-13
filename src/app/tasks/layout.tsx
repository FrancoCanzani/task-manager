'use client';

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
        {children}
      </section>
    </main>
  );
}
