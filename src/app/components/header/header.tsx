import SignOutButton from '../signOutButton';

import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex w-full items-center justify-between  border-b-4 border-gray-200'>
      <div className='flex px-5 items-center justify-center w-1/5 border-r-4 py-4 border-gray-200'>
        <Image
          src={'/iconTask.png'}
          width={35}
          height={35}
          alt='Icon'
          className='mr-4'
        />
        <h1 className='text-2xl font-bold'>TDone</h1>
      </div>
      <div className='px-5'>
        <SignOutButton />
      </div>
    </header>
  );
}
