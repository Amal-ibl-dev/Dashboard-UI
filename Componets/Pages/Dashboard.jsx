import React, { useState } from "react";
import Sidebar from "../Pages/Sidebar/Sidebar"
import Header from "./Header/Header";
import OverviewRow from "../Pages/OverviewRow/OverviewRow"
import AttendanceChart from "./AttendanceChart/AttendanceChart";
import AcademicTable from "./AcademicTable/AcademicTable";
import CourseSchedule from "../Pages/CourseSchedule/CourseSchedule"
import UpcomingCourse from "./UpcomingCourse";

export default function Dashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-950 p-4 gap-4 transition-colors duration-300">
      <Sidebar expanded={sidebarExpanded} onToggle={setSidebarExpanded} />

      <div className="flex-1 flex flex-col min-w-0 bg-white dark:bg-zinc-900 rounded-[28px] border border-zinc-100 dark:border-zinc-800 shadow-xl shadow-zinc-200/70 dark:shadow-black/20 overflow-hidden transition-colors duration-300">
        <Header />

        <div className="flex-1 overflow-y-auto bg-zinc-50/60 dark:bg-zinc-900/60 transition-colors duration-300">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_260px] gap-6 p-6">
            {/* Main column */}
            <div className="space-y-6 min-w-0">
              <OverviewRow />
              <AttendanceChart />
              <AcademicTable />
            </div>

            {/* Right column */}
            <div className="space-y-6 min-w-0">
              <CourseSchedule />
              <UpcomingCourse />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}