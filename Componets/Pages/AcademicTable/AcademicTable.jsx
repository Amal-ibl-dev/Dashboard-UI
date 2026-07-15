import React from "react";
import { ChevronDown } from "lucide-react";

import { STUDENTS } from "../../const/students"
import StudentRow from "../../Pages/AcademicTable/StudentRow.jsx"

import {
  TABLE_CARD,
  TABLE_HEADER,
  ACTION_BUTTON,
} from "../../utils/academicTableStyles.js"

export default function AcademicTable() {
  return (
    <section className={TABLE_CARD}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Visualize your academic success
        </h3>

        <button className={ACTION_BUTTON.secondary}>
          Annual Exam
          <ChevronDown size={14} />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">

          <thead>
            <tr className={TABLE_HEADER}>
              <th className="pb-3 pr-4 font-medium">Profile</th>
              <th className="pb-3 pr-4 font-medium">Name</th>
              <th className="pb-3 pr-4 font-medium">Student ID</th>
              <th className="pb-3 pr-4 font-medium">Group</th>
              <th className="pb-3 pr-4 font-medium">Mark-sheet</th>
              <th className="pb-3"></th>
            </tr>
          </thead>

          <tbody>
            {STUDENTS.map((student, index) => (
              <StudentRow
                key={student.id}
                student={student}
                index={index}
              />
            ))}
          </tbody>

        </table>
      </div>
    </section>
  );
}