import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import type { AddTaskFormProps, Task } from "../types/types";
import { nanoid } from "nanoid";



function AddTaskForm({ show, handleClose, setTasks }: AddTaskFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");

  const handleSubmit = () => {
    if (!title || !description || !assignee) return;

    const newTask: Task = {
      id: nanoid(),
      title,
      description,
      assignee,
      status: status as Task["status"],
    };

    setTasks((prev) => [...prev, newTask]);
    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("To Do");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Assignee</Form.Label>
            <Form.Control
              type="text"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTaskForm;
