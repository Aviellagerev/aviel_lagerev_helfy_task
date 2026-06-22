class Task {
  constructor(id, title, description, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
    this.priority = priority;
  }
}

module.exports = Task;