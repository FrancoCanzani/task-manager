'use client';

import Image from 'next/image';

import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

import CreatorButton from './creatorButton';
import useIsOpen from '@/hooks/useIsOpen';
import useTimer from '@/hooks/useTimer';

import play from '../../../../public/svg/play.svg';
import pause from '../../../../public/svg/pause.svg';
import stop from '../../../../public/svg/stop.svg';
import { FormEvent, useState, ChangeEvent } from 'react';

export default function Timer() {
  const { isOpen, handleOpen } = useIsOpen();
  const { isRunning, setIsRunning, countdown, setCountdown } = useTimer();
  const [duration, setDuration] = useState({ minutes: 25, seconds: 0 });

  function handleStop() {
    setIsRunning(false);
    setCountdown(duration);
  }

  const handleMinutesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const minutes = parseInt(e.target.value);
    setDuration({ ...duration, minutes });
  };

  const handleSecondsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const seconds = parseInt(e.target.value);
    setDuration({ ...duration, seconds });
  };

  const handleSave = (e: FormEvent) => {
    e.preventDefault();
    setCountdown(duration);
  };

  return (
    <div className='bg-rose-700 mt-6 flex flex-col items-center rounded-md p-3'>
      <CreatorButton text={'Timer'} isOpen={isOpen} handleOpen={handleOpen} />
      <div className='flex items-center w-full mt-2 justify-between px-2 py-1 rounded-md'>
        <span
          className={`bg-black text-white px-2 py-1 font-light rounded-md text-xl ${robotoMono.className}`}
        >
          {`${countdown.minutes}:${countdown.seconds
            .toString()
            .padStart(2, '0')}`}
        </span>
        <div>
          {!isRunning ? (
            <button
              onClick={() => setIsRunning(true)}
              className='bg-black hover:opacity-80 rounded-full p-1.5'
            >
              <Image
                src={play}
                width={20}
                height={20}
                alt='Play timer button'
              />
            </button>
          ) : (
            <button
              onClick={() => setIsRunning(false)}
              className='bg-black hover:opacity-80 rounded-full p-1.5'
            >
              <Image
                src={pause}
                width={20}
                height={20}
                alt='Pause timer button'
              />
            </button>
          )}
          <button
            onClick={handleStop}
            className='bg-black ml-1 hover:opacity-80 rounded-full p-1.5'
          >
            <Image src={stop} width={20} height={20} alt='Stop timer button' />
          </button>
        </div>
      </div>
      <form
        className={`mt-4 w-full ${isOpen ? 'block' : 'hidden'}`}
        onSubmit={handleSave}
      >
        <h2 className='mb-2 text-lg font-semibold'>Set Timer</h2>
        <div>
          <label htmlFor='minutes' className='hidden'>
            Minutes and seconds
          </label>
          <input
            type='number'
            name='minutes'
            id='minutes'
            placeholder='Min.'
            min={0}
            max={59}
            value={duration.minutes}
            onChange={handleMinutesChange}
            className='rounded-md mr-3 px-2 py-1'
          />
          <input
            type='number'
            name='seconds'
            id='seconds'
            placeholder='Sec.'
            min={0}
            max={59}
            value={duration.seconds}
            onChange={handleSecondsChange}
            className='rounded-md px-2 py-1'
          />
        </div>
        <button
          type='submit'
          className='bg-white mt-2 hover:bg-gray-100 px-2 py-1 rounded-md text-sm font-semibold'
        >
          Save
        </button>
      </form>
    </div>
  );
}
