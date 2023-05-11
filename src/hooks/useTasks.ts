import React, { useState } from 'react';

type Task = {
  description: string;
  createdAt: string;
};

const tasksKey = `tasks`;

export const useTasks = () => {
  const [description, setDescription] = useState<string>(``);
  const [tasks, setTasks] = useState<Task[]>([]);

  const getStoredTasks = (): Task[] => {
    const storedValue = localStorage.getItem(tasksKey);
    return storedValue ? JSON.parse(storedValue) : [];
  };

  const updateTasks = () => {
    // TODO: show loading

    setTasks(getStoredTasks());

    // TODO: hide loading
  };

  const addTask = (description: string) => {
    // TODO: show loading

    const task: Task = {
      description: description,
      createdAt: new Date().toISOString()
    };

    const storedTasks = getStoredTasks();
    storedTasks.push(task);
    console.log(storedTasks);
    localStorage.setItem(tasksKey, JSON.stringify(storedTasks));
    // TODO: hide loading
  };

  const deleteTask = (index: number) => {
    const newTasks = getStoredTasks().filter((task, i) => i !== index);
    localStorage.setItem(tasksKey, JSON.stringify(newTasks));
    setTasks(newTasks);
  };

  const handleDescriptionInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleAddTaskClick = () => {
    if (!description) {
      alert(`Please enter a description.`);
      return;
    }
    addTask(description);
    updateTasks();
    setDescription(``);
  };

  return {
    tasks,
    updateTasks,
    deleteTask,
    description,
    handleAddTaskClick,
    handleDescriptionInputChange
  };
};
