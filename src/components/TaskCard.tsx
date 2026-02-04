import { Draggable } from "@hello-pangea/dnd";
import type { TaskCardProps } from "../types/types";
import { Card } from "react-bootstrap";

function TaskCard({ task, index }: TaskCardProps) {
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Card
            style={{ width: "18rem" }}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card.Body>
              <Card.Title>{task.title}</Card.Title>
              <Card.Text>{task.description}</Card.Text>
              <Card.Subtitle className="text-muted text-end">
                Assignee: {task.assignee}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        )}
      </Draggable>
    </>
  );
}

export default TaskCard;
