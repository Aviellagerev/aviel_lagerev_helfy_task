import { useState, useEffect } from 'react';

function TaskForm({ onAddTask, onUpdateTask, editingTask, onCancelEdit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      setTitle('');
      setDescription('');
      setPriority('medium');
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    if (editingTask) {
      onUpdateTask({ title, description, priority });
    } else {
      onAddTask({ title, description, priority });
    }
    setTitle('');
    setDescription('');
    setPriority('medium');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit">{editingTask ? 'Update' : 'Add Task'}</button>
      {editingTask && (
        <button type="button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;