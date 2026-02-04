import { nanoid } from "nanoid";
import type { Task } from "../types/types";

const taskData = [
  {
    title: "Express Myself",
    description: "Set the building on fire",
    status: "To Do",
    assignee: "Lyla Harper",
  },
  {
    title: "Catch Up Work - Saturday",
    description: "Gonna need you to come into work on Saturday.",
    status: "In Progress",
    assignee: "Hayes Aguirre",
  },
  {
    title: "Catch Up Work - Sunday",
    description: "Gonna need you to come into work on Sunday.",
    status: "In Progress",
    assignee: "Ariah Koch",
  },
  {
    title: "TPS Reports",
    description: "Did you get the memo?",
    status: "Done",
    assignee: "Salvador Vega",
  },
  {
    title: 'Buy some more "Flare"',
    description: "Apparently, 13 is not minimum number",
    status: "Done",
    assignee: "Dakota Calhoun",
  },
  {
    title: "Move desk into storage room B",
    description: "See if you can take care of som of the",
    status: "Done",
    assignee: "Garcy Crane",
  },
];

const initialTask: Task[] = [];

taskData.forEach((task) => {
  initialTask.push({
    ...task,
    id: nanoid(),
  });
});

export default initialTask;
