import NoteCreator from './noteCreator';
import TaskCreator from './taskCreator';
import Timer from './timer';

export default function Aside() {
  return (
    <aside className='flex min-h-full flex-col border-r-4 border-gray-200'>
      <div className='px-5 mt-6'>
        <TaskCreator />
        <NoteCreator />
        <Timer />
      </div>
    </aside>
  );
}
