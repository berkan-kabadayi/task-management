import type React from "react";

export interface Task {
  title: string;
  description: string;
  status: string;
  assignee: string;
  id: string;
}

export interface TaskCardProps {
  task: Task;
  index: number;
}

export interface TaskColumnProps {
  status: string;
  tasks: Task[];
}

export interface TaskBoardProps {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}


export interface AddTaskFormProps {
  show: boolean;
  handleClose: () => void;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}