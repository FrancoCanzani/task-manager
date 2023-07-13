'use client';

import { auth } from '@/firebase/firebase';
import { signOut } from 'firebase/auth';

import { useRouter } from 'next/navigation';

export default function SignOutButton() {
  const { push } = useRouter();
  const handleSignOut = () => {
    signOut(auth).then(() => {
      push('/');
    });
  };
  return (
    <button
      className='bg-white hover:bg-gray-100 px-2 py-1 rounded-md text-sm font-semibold'
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  );
}
