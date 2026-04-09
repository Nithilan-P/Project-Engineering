interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  onToggle: (id: number) => void;
}

const TaskItem = ({ id, title, completed, onToggle }: TaskItemProps) => {
  return (
    <div
      onClick={() => onToggle(id)}
      className="flex items-center gap-3 px-4 py-3 rounded-lg bg-card border border-border cursor-pointer hover:bg-accent/50 transition-colors group"
    >
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
          completed
            ? "bg-primary border-primary"
            : "border-muted-foreground/40 group-hover:border-primary/60"
        }`}
      >
        {completed && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 4" stroke="hsl(var(--primary-foreground))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <span
        className={`text-sm transition-all ${
          completed
            ? "line-through text-muted-foreground"
            : "text-foreground"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default TaskItem;
