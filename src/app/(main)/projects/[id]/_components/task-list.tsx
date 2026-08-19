"use client";

import { useState } from "react";
import { format } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Task } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TaskListProps {
  initialTasks: Task[];
}

export function TaskList({ initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTaskChecked = (taskId: string, checked: boolean) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: checked ? "done" : "todo" } : task
      )
    );
  };

  const getPriorityBadge = (priority: Task["priority"]) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      case "low":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[50px]">Done</TableHead>
          <TableHead>Task</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Due Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow key={task.id}>
            <TableCell>
              <Checkbox
                checked={task.status === "done"}
                onCheckedChange={(checked) =>
                  handleTaskChecked(task.id, !!checked)
                }
                aria-label={`Mark task "${task.title}" as done`}
              />
            </TableCell>
            <TableCell
              className={cn("font-medium", task.status === 'done' && 'line-through text-muted-foreground')}
            >
              {task.title}
            </TableCell>
            <TableCell>
              <Badge variant={task.status === 'done' ? 'default' : 'secondary'}>
                {task.status.replace('-', ' ')}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge variant={getPriorityBadge(task.priority)}>
                {task.priority}
              </Badge>
            </TableCell>
            <TableCell>{format(new Date(task.dueDate), "MMM d, yyyy")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
