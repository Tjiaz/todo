import "./App.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    setTasks(JSON.parse(tasks));
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  const numberComplete = tasks.filter((t) => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = (numberComplete / numberTotal) * 100;
    if (percentage === 0) {
      return "Try to do atleast one";
    }
    if (percentage === 100) {
      return "Nice job for today";
    }
    return "Keep it going";
  }

  function removeTask(IndexToRemove) {
    setTasks((prev) => {
      return prev.filter((taskObj, index) => index !== IndexToRemove);
    });
  }

  function renameTask(index, newName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    });
  }

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} Complete
      </h1>
      <h2>{getMessage()}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          {...task}
          onTrash={() => removeTask(index)}
          onToggle={(done) => updateTaskDone(index, done)}
          onRename={(newName) => renameTask(index, newName)}
        />
      ))}
    </main>
  );
}

export default App;
