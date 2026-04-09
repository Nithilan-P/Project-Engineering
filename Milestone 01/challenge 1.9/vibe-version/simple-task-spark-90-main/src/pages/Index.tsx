import { useState } from "react";
import TaskInput from "@/components/TaskInput";
import TaskItem from "@/components/TaskItem";
import TaskFilter, { type Filter } from "@/components/TaskFilter";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [nextId, setNextId] = useState(1);

  const addTask = (title: string) => {
    setTasks((prev) => [...prev, { id: nextId, title, completed: false }]);
    setNextId((n) => n + 1);
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const filtered = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const counts = {
    all: tasks.length,
    active: tasks.filter((t) => !t.completed).length,
    completed: tasks.filter((t) => t.completed).length,
  };

  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-12 sm:py-20">
      <div className="w-full max-w-lg space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Tasks</h1>
          <p className="text-sm text-muted-foreground">Stay organized, one task at a time.</p>
        </div>

        <TaskInput onAdd={addTask} />

        <TaskFilter current={filter} onChange={setFilter} counts={counts} />

        <div className="space-y-2">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-8">
              {tasks.length === 0 ? "No tasks yet. Add one above!" : "No tasks match this filter."}
            </p>
          ) : (
            filtered.map((task) => (
              <TaskItem
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                onToggle={toggleTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
