const express = require('express');
const cors = require('cors');
const Task = require('./models/Task');
const app = express();

app.use(cors());
app.use(express.json());

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
const {title,description,priority} = req.body;

if(!title || title.trim()===''){
    return res.status(400).json({error:'Title is needed'});
}
const allowed = ['low','medium','high'];
if(!allowed.includes(priority)){
    return res.status(400).json({error:"Priority is needed"});
}
const task = new Task(nextId, title, description, priority);
nextId++;
tasks.push(task);
res.status(201).json(task);
});

app.put('/api/tasks/:id',(req,res)=>{

const id = Number(req.params.id);

});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});