import React, { useState, useEffect } from 'react';
import api from './services/api';
import { ToastContainer } from 'react-toastify'
import notification from './helpers/notifications';
import validation from './helpers/validations';

import Form from './components/Form';
import List from './components/List';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    listTasks();
  }, []);

  const listTasks = async () => {
    try {
      const listTasks = await api.list('/tasks');
      setTasks(listTasks);
    } catch (error) {
      notification.error('There was a fail, sorry =(')
    }
  }

  const addTask = async (task) => {
    try {
      if (validation.isEmpty(task.description)) {
        notification.error('Type a task');
      } else {
        const id = await api.add('/tasks', task);
        const newTask = { id, ...task };
        setTasks([...tasks, newTask]);
        notification.success('Task added');
      }
    } catch (error) {
      notification.error('There was a fail, sorry =(')
    }
  }

  const updateTask = async (idTask) => {
    const taskToAtt = tasks.filter(task => task.id === idTask)[0];
    taskToAtt.done = !taskToAtt.done;
    try {
      await api.update(`/tasks/${taskToAtt.id}`, taskToAtt);
      notification.success('Task updated');
      await listTasks();
    } catch (error) {
      notification.error('There was a fail, sorry =(')
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      <Form save={addTask} />
      <List tasks={tasks} update={updateTask} />
    </div>
  );
}

export default App;
