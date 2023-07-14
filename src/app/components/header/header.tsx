import SignOutButton from '../signOutButton';

export default function Header() {
  return (
    <header className='flex w-full items-center justify-end bg-white py-5 px-5 border-b-4 border-gray-200'>
      <div className='px-5'>
        <SignOutButton />
      </div>
    </header>
  );
}
