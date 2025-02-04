import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const removeTask = (index) => {
    setTasks(prevTasksArray => [
      ...prevTasksArray.slice(0, index),
      ...prevTasksArray.slice(index + 1)
    ]);
  };

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (taskText, taskCategory) => {
    const newTask = { text: taskText, category: taskCategory };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        handleCategorySelection={handleCategorySelection}
      />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList
        tasks={tasks}
        removeTask={removeTask}
        selectedCategory={selectedCategory}
      />
    </div>
  );
}

export default App;