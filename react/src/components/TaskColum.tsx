import { Col } from "react-bootstrap";
import type { TaskColumnProps } from "../types/types";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

function TaskColum({ tasks, status }: TaskColumnProps) {
  return (
    <>
      <Col>
        <h4 className="text-center">{status}</h4>
        <Droppable droppableId={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <TaskCard key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Col>
    </>
  );
}

export default TaskColum;
