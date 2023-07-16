import { SetStateAction } from 'react';
import Task from '@/types/taskTypes';

interface TaskCreatorFormProps {
  handleAddTask: (e: React.FormEvent) => void;
  isOpen: boolean;
  setTask: React.Dispatch<SetStateAction<Task>>;
  task: Task;
  errorMessage: string | undefined;
  isSaved: boolean;
}

export default function TaskCreatorForm({
  handleAddTask,
  isOpen,
  setTask,
  task,
  errorMessage,
  isSaved,
}: TaskCreatorFormProps) {
  return (
    <form
      onSubmit={handleAddTask}
      className={`mt-4 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div>
        <label htmlFor='name' className='hidden'>
          Name
        </label>
        <input
          type='text'
          id='name'
          placeholder='Task'
          autoComplete='off'
          required
          className='w-full rounded-md px-2 py-1'
          value={task.name || ''}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
      </div>
      <div className='mt-2'>
        <label htmlFor='label' className='hidden'>
          Label
        </label>
        <input
          type='text'
          autoComplete='off'
          id='label'
          placeholder='Label'
          required
          className='w-full rounded-md px-2 py-1'
          value={task.label || ''}
          onChange={(e) => setTask({ ...task, label: e.target.value })}
        />
      </div>
      <div className='mt-2'>
        <select
          name='priority'
          id='priority'
          className='w-full px-2 py-1 rounded-md'
          value={task.priority || 'low'}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value='low' className='text-gray-400'>
            --Priority--
          </option>
          <option value='High'>High</option>
          <option value='Medium'>Medium</option>
          <option value='Low'>Low</option>
        </select>
      </div>
      <div className='mt-2'>
        <textarea
          name='description'
          id='description'
          placeholder='Description'
          autoComplete='off'
          className='rounded-md px-2 py-1 w-full'
          value={task.description || ''}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        ></textarea>
      </div>
      <button
        type='submit'
        disabled={isSaved}
        className={`${
          isSaved ? 'bg-lime-400 animate-pulse' : 'bg-white'
        } transition-all duration-500 hover:bg-gray-100 px-2 py-1 rounded-md text-sm font-semibold`}
      >
        {isSaved ? 'Saved' : 'Save'}
      </button>
      <div className='mt-3 max-w-min text-xs font-bold text-red-700'>
        {errorMessage}
      </div>
    </form>
  );
}
