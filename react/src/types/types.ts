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
