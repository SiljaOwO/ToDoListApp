import React, { FunctionComponent } from "react";

import { Task } from "../models/tasks";
import { TaskListItem } from "./ToDoListItems";


interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  <ul className="paddingLeftTodo">
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={onDelete} />
    ))}
  </ul>
);
