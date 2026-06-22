const express = require('express');
const cors = require('cors');
const Task = require('./models/Task');
const app = express();

app.use(cors());
app.use(express.json());

//function that was reused more then ones 
function validateTask(body) {
  const { title, priority } = body;
  const allowed = ['low', 'medium', 'high'];

  if (!title || title.trim() === '') {
    return { valid: false, error: 'Title is needed' };
  }

  if (!allowed.includes(priority)) {
    return { valid: false, error: 'Priority is needed' };
  }

  return { valid: true };
}


app.get('/health',(req,res)=>{
     res.status(200).json({ status: 'its alive ' });
});
let tasks = []
let nextId = 1;

//get tasks
app.get('/api/tasks',(req,res)=>{
    res.status(200).json(tasks);
});

//create task
app.post('/api/tasks',(req,res)=>{

const result = validateTask(req.body);
if(!result.valid){
    return res.status(400).json({error:result.error});
}

const {title,description,priority} = req.body;
const task = new Task(nextId, title, description, priority);
nextId++;
tasks.push(task);
res.status(201).json(task);
});

//update whole task 
app.put('/api/tasks/:id',(req,res)=>{
const id = Number(req.params.id);
const task = tasks.find(t=> t.id === id );

if(!task){
    return res.status(404).json({error:'Task does exsist '});
}

const result = validateTask(req.body);
if(!result.valid){
    return res.status(400).json({error:result.error});
}

const {title,description,priority} = req.body;
task.update(title,description,priority);
res.status(200).json(task);
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});


