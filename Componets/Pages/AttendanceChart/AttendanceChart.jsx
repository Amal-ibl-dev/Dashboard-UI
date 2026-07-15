import React from "react";
import { Calendar } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

import { DATA } from "../../const/Attdata";
import { CHART_COLORS } from "../../const/Chartcolors"
import AttendanceLegend from "./AttendanceLegend";
import AttendanceTooltip from "./AttendanceTooltip";

import { CHART_CARD, ICON_BUTTON } from "../../utils/attendanceStyles";

export default function AttendanceChart() {
  return (
    <section className={CHART_CARD}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-text)]">
          Total Attendance Report
        </h3>

        <div className="flex items-center gap-5">
          <AttendanceLegend color="bg-[var(--color-secondary)]" label="Present" />
          <AttendanceLegend color="bg-[var(--color-success)]" label="Absence" />

          <button className={ICON_BUTTON}>
            <Calendar size={15} />
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-72">
        <AttendanceTooltip />

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={DATA}
            margin={{ top: 24, right: 8, left: -16, bottom: 0 }}
          >
            <defs>
              <linearGradient id="presentFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.present} stopOpacity={0.35} />
                <stop offset="100%" stopColor={CHART_COLORS.present} stopOpacity={0} />
              </linearGradient>

              <linearGradient id="absenceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.absence} stopOpacity={0.3} />
                <stop offset="100%" stopColor={CHART_COLORS.absence} stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              stroke="currentColor"
              className="text-zinc-100 dark:text-zinc-800"
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              interval={0}
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
            />

            <YAxis
              domain={[0, 100]}
              ticks={[10, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              width={40}
              tickFormatter={(value) => `${value}%`}
              tick={{ fill: "#a1a1aa", fontSize: 12 }}
            />

            <ReferenceLine x="26 Sep" stroke={CHART_COLORS.grid} strokeDasharray="4 4" />

            <Area
              type="monotone"
              dataKey="present"
              stroke={CHART_COLORS.present}
              strokeWidth={2}
              fill="url(#presentFill)"
            />

            <Area
              type="monotone"
              dataKey="absence"
              stroke={CHART_COLORS.absence}
              strokeWidth={2}
              fill="url(#absenceFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}