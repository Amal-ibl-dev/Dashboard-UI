import React from "react";
import { LEGEND_ITEM } from "../../utils/attendanceStyles";

export default function AttendanceLegend({ color, label }) {
  return (
    <div className={LEGEND_ITEM}>
      <span className={`w-2 h-2 rounded-full ${color}`} />
      {label}
    </div>
  );
}