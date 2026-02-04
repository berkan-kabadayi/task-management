import { useState } from "react";
import "./App.css";
import initialTask from "./data/data";
import type { Task } from "./types/types";
import { Container, Button } from "react-bootstrap";
import TaskBoard from "./components/TaskBoard";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTask);
  const [showAddTask, setShowAddTask] = useState(false);

  const handleOpen = () => setShowAddTask(true);
  const handleClose = () => setShowAddTask(false);

  return (
    <>
      <Container>
        <h1 className="text-center my-4">Task Management</h1>
        <div className="text-center mb-4">
          <Button variant="primary" onClick={handleOpen}>
            Add New Task
          </Button>
        </div>
        <TaskBoard tasks={tasks} setTasks={setTasks} />
        <AddTaskForm
          show={showAddTask}
          handleClose={handleClose}
          setTasks={setTasks}
        />
      </Container>
    </>
  );
}

export default App;
