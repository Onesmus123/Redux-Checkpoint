import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from '../actions';

// Task component for displaying individual tasks
const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  // Handle edit task action
  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
  };

  // Handle toggle task completion action
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className="task">
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
          {task.description}
        </span>
      )}
      <div>
        <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Complete'}</button>
        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Task;
