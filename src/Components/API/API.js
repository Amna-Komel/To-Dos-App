import axios from 'axios';

// Fetch tasks from the API and store them in local storage
export const fetchTasksFromAPI = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos'); // Replace with your actual API endpoint
    const tasks = response.data;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};

// Get tasks from local storage
export const getTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Save tasks to local storage
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add a new task to the local storage
export const addTaskToLocalStorage = (task) => {
  const tasks = getTasksFromLocalStorage();
  const newTasks = [...tasks, task];
  saveTasksToLocalStorage(newTasks);
};

// Update a task in the local storage
export const updateTaskInLocalStorage = (updatedTask) => {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  saveTasksToLocalStorage(updatedTasks);
};

// Delete a task from the local storage
export const deleteTaskFromLocalStorage = (taskId) => {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  saveTasksToLocalStorage(updatedTasks);
};
