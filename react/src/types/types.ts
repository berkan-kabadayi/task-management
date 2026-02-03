export interface Task {
  title: string;
  description: string;
  status: string;
  assigne: string;
  id: string;
}

export interface TaskCardProps {
  task: Task;
  index: number;
}
