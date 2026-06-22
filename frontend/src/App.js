import { useState, useEffect } from 'react';
import './App.css';
import { getTasks, createTask, deleteTask, toggleTask } from './services/taskService';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './styles/carousel.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
      />
    </div>
  );
}

export default App;