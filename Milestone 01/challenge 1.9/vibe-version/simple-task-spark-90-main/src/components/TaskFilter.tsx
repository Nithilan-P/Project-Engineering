export type Filter = "all" | "active" | "completed";

interface TaskFilterProps {
  current: Filter;
  onChange: (filter: Filter) => void;
  counts: { all: number; active: number; completed: number };
}

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

const TaskFilter = ({ current, onChange, counts }: TaskFilterProps) => {
  return (
    <div className="flex gap-1 bg-secondary rounded-lg p-1">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => onChange(f.value)}
          className={`px-3 py-1.5 text-sm rounded-md transition-all font-medium ${
            current === f.value
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {f.label} ({counts[f.value]})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
