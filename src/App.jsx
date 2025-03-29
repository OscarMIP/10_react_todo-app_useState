import "./App.module.css";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { HeaderWrapper } from "./HeaderWrapper";
import { ListHeader } from "./ListHeader";
import { Subheader } from "./Subheader";
import { ListContainer } from "./ListContainer";
import { ItemsList } from "./ItemsList";
import { TaskForm } from "./TaskForm";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      <ListContainer>
        <ItemsList itemsList={tasks} />
      </ListContainer>
    </div>
  );
}

export default App;