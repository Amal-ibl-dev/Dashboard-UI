import React from "react";
import { PROGRESS_TRACK } from "../../utils/overviewStyles"

export default function ProgressBar({ progress }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 shrink-0 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        {progress.label}
      </span>

      <div className={PROGRESS_TRACK}>
        <div
          className={`h-full rounded-full ${progress.bar} transition-all duration-500`}
          style={{ width: `${progress.value}%` }}
        />
      </div>

      <span className="w-9 shrink-0 text-right text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        {progress.value}%
      </span>
    </div>
  );
}