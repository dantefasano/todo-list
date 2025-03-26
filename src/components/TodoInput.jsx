import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  const handleAddClick = () => {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
