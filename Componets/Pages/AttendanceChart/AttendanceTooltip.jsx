import React from "react";
import { CHART_LABEL } from "../../utils/attendanceStyles";

export default function AttendanceTooltip() {
  return (
    <div className={CHART_LABEL}>
      128
      <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 rotate-45 bg-[var(--color-secondary)]" />
    </div>
  );
}