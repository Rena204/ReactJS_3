import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto' }}>
      <TextField
        label="New Task"
        value={newTask}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        style={{ marginBottom: 10 }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTask}
        fullWidth
        style={{ marginBottom: 20 }}
      >
        Add Task
      </Button>
      {tasks.map((task, index) => (
        <Card key={index} style={{ marginBottom: 10 }}>
          <CardContent style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>{task}</div>
            <IconButton onClick={() => handleDeleteTask(index)}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TodoList;
