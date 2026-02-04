import { DragDropContext, type DropResult } from "@hello-pangea/dnd";
import type { Task, TaskBoardProps } from "../types/types";
import { Container, Row } from "react-bootstrap";
import TaskColum from "./TaskColum";

function TaskBoard({ tasks, setTasks }: TaskBoardProps) {
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const draggedTask = tasks.find((task) => task.id === draggableId);

    if (!draggedTask) {
      console.error(`No task found: ${draggableId}`);
      return;
    }

    const updateTask: Task = {
      ...draggedTask,
      status: destination.droppableId as Task["status"],
    };

    const newTasks = tasks.filter((task) => task.id !== draggableId);

    const destinationTasks = newTasks.filter(
      (task) => task.status === destination.droppableId
    );

    let insertAt = 0;

    if (destination.index === 0) {
      const firstTaskInDestination = newTasks.find(
        (task) => task.status === destination.droppableId
      );

      if (firstTaskInDestination) {
        insertAt = newTasks.indexOf(firstTaskInDestination);
      } else {
        insertAt = newTasks.length;
      }
    } else {
      const prevTaskInDestination =
        destinationTasks[destination.index - 1];

      if (prevTaskInDestination) {
        insertAt = newTasks.indexOf(prevTaskInDestination) + 1;
      } else {
        insertAt = newTasks.length;
      }
    }

    newTasks.splice(insertAt, 0, updateTask);

    setTasks(newTasks);
  };

  const statuses: Task["status"][] = ["To Do", "In Progress", "Done"];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container fluid>
        <Row>
          {statuses.map((status) => (
            <TaskColum
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
            />
          ))}
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default TaskBoard;
