function TaskItem({ task, onDelete, onToggle }) {
  function handleDelete() {
    if (window.confirm('Delete this task?')) {
      onDelete(task.id);
    }
  }

  return (
    <div className={`task-card priority-${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className="priority-badge">{task.priority}</span>
      {task.completed && <span className="done-badge">✓ Done</span>}

      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;