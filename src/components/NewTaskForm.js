// NewTaskForm.js
import React, { useState } from "react";
import { CATEGORIES } from "../data.js";

function NewTaskForm({ onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(CATEGORIES[0]);

  const handleCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit(taskText, taskCategory);
    setTaskText("");
    setTaskCategory(CATEGORIES[0]);
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text"
          name="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={taskCategory}
          onChange={handleCategoryChange}
        >
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;