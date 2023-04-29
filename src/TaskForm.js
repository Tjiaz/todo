import React, { useState } from "react";

const TaskForm = ({onAdd}) => {
  const [taskName, setTaskName] = useState("");
  return (
    <div>
      <form onSubmit={(e) => onAdd(taskName)}>
        <button>+</button>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Your next task...."
        />
      </form>
    </div>
  );
};

export default TaskForm;
