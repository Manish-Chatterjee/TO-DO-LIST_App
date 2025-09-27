import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <h1>IDEA LIST</h1>
        <input
          className="todo-input"
          type="text"
          placeholder="Add Items..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button className="todo-btn" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
