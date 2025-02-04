import React from "react";
import Task from "./Task"

function TaskList({ tasks, removeTask, selectedCategory }) {
  const filteredTasks = tasks.filter(
    (task) =>
      selectedCategory === "All" || task.category === selectedCategory
  );

  const mappedTasks = filteredTasks.map((task, index) => (
    <Task key={index} index={index} removeTask={removeTask} {...task} />
  ));

  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;