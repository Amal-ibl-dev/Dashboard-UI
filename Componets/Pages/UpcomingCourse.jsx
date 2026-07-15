import React from "react";
import { Clock, CalendarDays, Link as LinkIcon } from "lucide-react";

export default function UpcomingCourse() {
  return (
    <div className="rounded-3xl p-6 bg-gradient-to-br from-orange-300 via-orange-400 to-emerald-500 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Upcoming Course</h3>
        <button className="h-8 px-4 rounded-full bg-white/25 text-white text-xs font-medium hover:bg-white/35 transition-colors backdrop-blur-sm">
          Learn more
        </button>
      </div>

      <h4 className="text-2xl font-bold text-white mb-2">UI/UX design</h4>
      <p className="text-sm text-white/85 leading-relaxed mb-6">
        Our design process is focused on understanding user behavior, creating visually appealing
        layouts
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
          <Clock size={13} />
          10AM -12PM
        </span>
        <span className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
          <CalendarDays size={13} />
          16th Oct
        </span>
        <span className="flex items-center gap-1.5 h-8 px-3 rounded-full bg-white text-zinc-800 text-xs font-medium">
          <LinkIcon size={13} />
          Zoom Link
        </span>
      </div>
    </div>
  );
}