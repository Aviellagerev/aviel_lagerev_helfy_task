class Task {
  constructor(id, title, description, priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = false;
    this.createdAt = new Date();
    this.priority = priority;
  }
  update(title,description,priority){
    this.title = title 
    this.description = description;
    this.priority = priority;
  }
  toggle(){
    this.completed = !this.completed;
  }
}

module.exports = Task;