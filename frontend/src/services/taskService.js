const API_URL = 'http://localhost:4000/api/tasks';

export async function getTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
}

export async function createTask(task){
    const response = await fetch(API_URL,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(task),
    });
    if(!response.ok){
        throw new Error('Failed to createtask');
    }
    return response.json();
}

export async function updateTask(id, task) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
     if(!response.ok){
        throw new Error('Failed to updateTask');
    }
    return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
       if(!response.ok){
        throw new Error('Failed to deleteTask');
    }
    return response.json();
}

export async function toggleTask(id) {
  const response = await fetch(`${API_URL}/${id}/toggle`, {
    method: 'PATCH',
  });
       if(!response.ok){
        throw new Error('Failed to toggleTask');
    }
    return response.json();
}