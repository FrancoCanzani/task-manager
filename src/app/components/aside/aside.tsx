import NoteCreator from './noteCreator';
import TaskCreator from './taskCreator';
import Timer from './timer';

export default function Aside() {
  return (
    <aside className='px-4 py-6 flex flex-col border-r-2 border-gray-400'>
      <TaskCreator />
      <NoteCreator />
      <Timer />
    </aside>
  );
}
