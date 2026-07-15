import React from "react";
import { TABLE_CELL, ACTION_BUTTON } from "../../utils/academicTableStyles.js"

export default function StudentRow({ student, index }) {
  const buttonClass =
    index % 2 === 0
      ? ACTION_BUTTON.secondary
      : ACTION_BUTTON.primary;

  return (
    <tr className="border-t border-zinc-100 dark:border-zinc-800">
      <td className={TABLE_CELL}>
        <div className={`w-9 h-9 rounded-full ${student.color}`} />
      </td>

      <td className={TABLE_CELL}>
        <p className="font-semibold text-zinc-900 dark:text-white">
          {student.name}
        </p>

        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          {student.cls}
        </p>
      </td>

      <td className={`${TABLE_CELL} text-zinc-500 dark:text-zinc-400`}>
        {student.id}
      </td>

      <td className={`${TABLE_CELL} text-zinc-500 dark:text-zinc-400`}>
        {student.group}
      </td>

      <td className={`${TABLE_CELL} font-medium text-zinc-800 dark:text-zinc-200`}>
        {student.mark}
        <span className="text-zinc-300 dark:text-zinc-600">/100</span>
      </td>

      <td className={TABLE_CELL}>
        <button className={buttonClass}>
          Edit Profile
        </button>
      </td>
    </tr>
  );
}