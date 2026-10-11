import { STATUS_LABEL, type ProjectStatus } from "@/lib/content";

// One accent (in progress) plus neutrals; shape and fill carry the rest.
const DOT: Record<ProjectStatus, string> = {
  done: "bg-foreground",
  client: "bg-muted",
  offline: "border border-muted bg-transparent",
  "in-progress": "bg-accent",
};

export default function ProjectStatusMark({ status }: { status: ProjectStatus }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted">
      <span aria-hidden className={`size-1.5 rounded-full ${DOT[status]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
