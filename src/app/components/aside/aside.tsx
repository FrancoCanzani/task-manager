import NoteCreator from './noteCreator';
import TaskCreator from './taskCreator';
import Timer from './timer';

export default function Aside() {
  return (
    <aside className='px-4 py-6 flex flex-col border-r border-gray-300'>
      <TaskCreator />
      <NoteCreator />
      <Timer />
    </aside>
  );
}
