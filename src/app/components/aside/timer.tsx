import CreatorButton from './creatorButton';
import useIsOpen from '@/hooks/useIsOpen';

export default function Timer() {
  const { isOpen, handleOpen } = useIsOpen();

  return (
    <div className='bg-red-200 mt-6 flex flex-col items-center rounded-md p-3'>
      <CreatorButton text={'Timer'} isOpen={isOpen} handleOpen={handleOpen} />
    </div>
  );
}
