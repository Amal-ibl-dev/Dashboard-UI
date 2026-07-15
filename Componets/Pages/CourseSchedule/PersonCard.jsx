import { Clock, Video } from "lucide-react";
import IconButton from "./IconButton";

export default function PersonCard({ person }) {
  return (
    <div className="flex items-center gap-3 py-2.5 rounded-2xl hover:bg-[var(--color-border)] transition-colors px-1 -mx-1">
      <div className={`w-10 h-10 rounded-full ${person.color}`} />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text)] truncate">
          {person.name}
        </p>

        <p className="text-xs text-[var(--color-text-muted)] truncate">{person.role}</p>
      </div>

      <IconButton>
        <Clock size={15} />
      </IconButton>

      <IconButton>
        <Video size={15} />
      </IconButton>
    </div>
  );
}