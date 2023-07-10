import TaskCreator from './taskCreator';

export default function Aside({ tasks, setTasks }) {
  return (
    <aside className='w-2/6 px-4 py-6 bg-yellow-300 flex flex-col'>
      <TaskCreator tasks={tasks} setTasks={setTasks} />
    </aside>
  );
}
