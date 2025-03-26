import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState(
    () => localStorage.getItem("bgColor") || "#FFFF97"
  ); // Initial background color
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  ); // Tasks list
  const [taskInput, setTaskInput] = useState(""); // Input value

  const colors = [
    "#EAEC40", // dandelion yellow
    "#F275AD", // cyclamen pink
    "#79CBC5", // pearl aqua
    "#FFFF97", // canary yellow
    "#FBAE4A", // pastel orange
    "#F3858E", // tulip pink
  ];

  useEffect(() => {
    // Save the background color (bgColor) to localStorage
    // This runs every time bgColor changes
    localStorage.setItem("bgColor", bgColor);
  }, [bgColor]); // Dependency: only runs when bgColor changes

  useEffect(() => {
    // Save the tasks list (tasks) to localStorage
    // This runs every time tasks change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Dependency: only runs when tasks change

  const handleColorChange = (color) => {
    setBgColor(color); // Change the background color
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value); // Updates the input value
  };

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput.trim()]);
      setTaskInput(""); // Clear input after adding task
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask(); // Add task by pressing Enter
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
  };

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <h1>To-do List</h1>

      {/* Input Field for Adding New Task */}
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add New Task"
        />
        <button className="add-btn" onClick={addTask}>
          +
        </button>
      </div>

      {/* Task Counter (Displays the number of tasks or a message if none) */}
      <div className="task-count">
        {tasks.length === 0
          ? "No pending tasks, add a task"
          : `${tasks.length} pending ${
              tasks.length === 1 ? "task" : "tasks"
            } left`}
      </div>

      {/* Color Selector Buttons */}
      <div className="color-picker">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorChange(color)}
            className="color-btn"
          >
            {color === bgColor ? "✓" : ""}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            {/* Task Text */}
            <p>{task}</p>

            {/* Delete Button for Each Task */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
