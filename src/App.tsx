import { useState } from "react";
import "./App.css";
import initialTask from "./data/data";
import type { Task } from "./types/types";
import { Container } from "react-bootstrap";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTask);
  console.log(initialTask);

  return (
    <>
      <Container>
        <h1 className="text-center">Task Management</h1>
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </Container>
    </>
  );
}

export default App;
