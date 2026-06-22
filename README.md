# aviel_lagerev_helfy_task
small task manager application build using node.js react and express.js

Tech Stack
1) Frontend: React (create-react-app)
2) Backend: Express.js / Node.js
3) Storage: In-memory array 

Backend Setup
1) cd backend
2) npm install
3) npm start

backend start on port 4000

Frontend Setup
1) cd frontend
2) npm install
3) npm start

the front start on port 3000 

API Docomuntation 

base url : http://localhost:4000

Task Model
{
id: number,
title: string,
description: string,
completed: boolean,
createdAt: Date,
priority: 'low' | 'medium' | 'high'
}

API Endpoints
GET /api/tasks - Get all tasks

Returns an array of all tasks
Respone - 200 OK


POST /api/tasks - Create a new task

Creates a task 
Request body - { title, description, priority }
Response - 201 Created with the created task
Errors - 400 if title is missing/empty or priority is missing/invalid

PUT /api/tasks/:id - Update a task

Updates a tasks - title description, and priority
Request body  - { title, description, priority }
Response - 200 OK with the updated task
Errors - 400 for invalid input, 404 if the ID doesn't exist


DELETE /api/tasks/:id - Delete a task
Removes a task
Response- 200 OK with { message: "Task deleted" }
Erros - 404 if the id doesnt exsist

PATCH /api/tasks/:id/toggle - Toggle task completion status
Flips a tasks completed status 
Response - 200 OK with the updated task
Errors- 404 if the id doesnt exist


Features
create,edit,delete,and toggle tasks 
animated carousel with auth move and manual arrows and pause on hover/edit/add

filter by all/completed/pending
color coded priorty indication (made with gruvbox colors (i use it for everything))
completed tasks visually  have a mark when finished
delete confirmation
loading and error handeling 

assumptions and design decisions
used a task class for every task with complete defaulting to false and creatAt set automaticlly 
made pririty required field
put does a full replacment of editable fields rather than a partial update since the edit form send all the fields 
didt split the backend into routes/midleware folders since the scope of hthe app is small

Time Spend
-Backend API: 80 minutes
-Frontend Core Features: 70 minutes
-styling and polish: 50 minutes
-testing and debugging: 40 minutes 


known issues didt have time to fix:
carousel loop rests(it jumps )
filter and carousel index interaction when switch it jumps somtimes
i didnt add sucess/confirm on addition and edits 

adding for futre that was in the design in my head didnt have time for that
list/carousel view toggle 