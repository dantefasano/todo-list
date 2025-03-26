import React, { useState } from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ task, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="todo-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>{task}</p>
      {isHovered && (
        <button onClick={onDelete} className="delete-btn">
          🗑️
        </button>
      )}
    </div>
  );
};

export default TodoItem;
