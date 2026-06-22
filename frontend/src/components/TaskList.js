import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (tasks.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tasks.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [tasks.length]);

  if (tasks.length === 0) {
    return <p className="empty-message">No tasks yet. Add one above!</p>;
  }

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {tasks.map((task) => (
          <div className="carousel-slide" key={task.id}>
            <TaskItem task={task} onDelete={onDelete} onToggle={onToggle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;