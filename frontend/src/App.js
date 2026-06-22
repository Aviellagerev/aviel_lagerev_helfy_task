import { useState, useEffect } from 'react';
import { getTasks } from './services/taskService';
import './App.css';

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} — {task.priority} {task.completed ? '✓' : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;