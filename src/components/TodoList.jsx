import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks, add a task</p>
      ) : (
        tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => onDelete(index)} />
        ))
      )}
    </div>
  );
};

export default TodoList;
