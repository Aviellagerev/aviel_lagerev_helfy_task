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
        headers:{'Con'}
    });
}