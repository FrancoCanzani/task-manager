'use client';

import {
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const provider = new GoogleAuthProvider();

export default function SignIn() {
  const { push } = useRouter();
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        push('/tasks');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [push]);

  function handleGoogleSignIn() {
    try {
      signInWithRedirect(auth, provider).catch((error) => {
        setError('Login failed. Please try again.');
        console.log(error);
      });
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Hello world!</h1>
      {error && <p>{error}</p>}
      <button onClick={handleGoogleSignIn}>Google</button>
    </div>
  );
}
