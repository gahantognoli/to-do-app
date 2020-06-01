import React, { useState, useEffect } from 'react';
import api from './src/services/api';

import Form from './src/components/Form';
import List from './src/components/List';

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    listTasks();
  }, [])

  const addTask = async (task) => {
    try {
      const newToAdd = {
        description: task,
        done: false
      }
      const id = await api.add('tasks', newToAdd);
      const newTask = { id, ...newToAdd }
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.warn(error);
    }
  }

  const listTasks = async () => {
    try {
      const listTasks = await api.list('tasks');
      setTasks(listTasks);
    } catch (error) {
      console.warn(error);
    }
  }

  const updateTasks = async (id) => {
    let taskToUpdate = tasks.filter(task => task.id === id)[0];
    taskToUpdate.done = !taskToUpdate.done;
    await api.update(`tasks/${taskToUpdate.id}`, taskToUpdate);
    listTasks();
  }

  return (
    <>
      <Form addTask={addTask} />
      <List tasks={tasks} updateTask={updateTasks} />
    </>
  );
};

export default App;
