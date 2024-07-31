import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

// AddTask component for adding new tasks
const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  // Handle form submission to add a new task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      dispatch(addTask({ id: Date.now(), description, isDone: false }));
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
