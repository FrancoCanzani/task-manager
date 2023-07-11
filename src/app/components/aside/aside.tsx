import TaskCreator from './taskCreator';

export default function Aside() {
  return (
    <aside className='px-4 py-6 flex flex-col border-r border-gray-300'>
      <TaskCreator />
    </aside>
  );
}
