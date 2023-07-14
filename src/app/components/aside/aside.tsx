import NoteCreator from './noteCreator';
import TaskCreator from './taskCreator';
import Timer from './timer';

import Image from 'next/image';

export default function Aside() {
  return (
    <aside className='flex min-h-full flex-col border-r-4 border-gray-200'>
      <div className='flex px-5 items-center justify-center border-b-4 border-gray-200 py-4'>
        <Image
          src={'/iconTask.png'}
          width={35}
          height={35}
          alt='Icon'
          className='mr-4'
        />
        <h1 className='text-2xl font-bold'>TDone</h1>
      </div>
      <div className='px-5 mt-6'>
        <TaskCreator />
        <NoteCreator />
        <Timer />
      </div>
    </aside>
  );
}
