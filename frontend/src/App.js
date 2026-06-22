import { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask, toggleTask, updateTask } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import './App.css';
import './styles/carousel.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState('all');
  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (err) {
        setError('Could not load tasks');
      } finally {
        setLoading(false);
      }
    }
    loadTasks();
  }, []);

  async function handleAddTask(newTask) {
    try {
      const created = await createTask(newTask);
      setTasks([...tasks, created]);
    } catch (err) {
      setError('Could not add task');
    }
  }
  async function handleDeleteTask(id) {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      setError('Could not delete task');
    }
  }

  async function handleToggleTask(id) {
    try {
      const updated = await toggleTask(id);
      setTasks(tasks.map((task) => (task.id === id ? updated : task)));
    } catch (err) {
      setError('Could not toggle task');
    }
  }
  async function handleUpdateTask(updatedTask) {
    try {
      const result = await updateTask(editingTask.id, updatedTask);
      setTasks(tasks.map((task) => (task.id === editingTask.id ? result : task)));
      setEditingTask(null);
    } catch (err) {
      setError('Could not update task');
    }
  }
  const filteredTasks = tasks.filter((task) => {
  if (filter === 'completed') return task.completed;
  if (filter === 'pending') return !task.completed;
  return true;
});
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        editingTask={editingTask}
        onCancelEdit={() => setEditingTask(null)}
      />
      <TaskFilter filter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
        onEdit={setEditingTask}
      />
    </div>
  );
}

export default App;